import { useEffect, useState } from "react";
import "./BlogDetail.scss";
import {BlogHero, BlogContent, BlogShare, BlogAuthor, BlogComment, BlogCommentForm} from "./Components";
import {useFetch} from "Services/Hooks";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Loader } from "Components";
import { Box, Container, Grid } from "@mui/material";

const author = {
  name: "mary andries",
  img: 'https://preview.colorlib.com/theme/hvac/img/blog/details/author.png',
  description: 'Another thing that I don’t really like about them is that they’re such sideline actors, lacking the abilities to participate actively.',
}
export default function BlogDetail() {
  const [page, setPage] = useState({});
  const [blogData, setBlogData] = useState({});
  const {bid} = useParams();
  const pageApi = useFetch("blogDetailPage");
  const blogApi = useFetch("blogs/" + bid);
  useEffect(() => {
    pageApi.get().then(({data}) => setPage(data));
    blogApi.get().then(({data}) => setBlogData(data));
  }, []);
  if (isEmpty(blogData) === true){
    return <Loader />;
  }else{
    const {backgroundHero} = page;
    const {title, subTitle, imageDefault, postedBy, postDate, content, comments} = blogData;
    /** xu ly khi chua co backend */
    const previewBlog = (text) => {
      const getFirstParagraph = text.split(/\n\n/)[0];
      //get word array
      const wordArr = getFirstParagraph.split(/\s/);
      //handle get 25 first words
      let newWordArr = [];
      for(let i = 0; i < 25; i++){
        newWordArr.push(wordArr[i]);
      }
      return newWordArr.join(" ") + "...";
    }
    return (
      <Box component={'section'} className="blog-detail spad">
        <BlogHero
          bg={backgroundHero}
          title={title}
          subTitle={subTitle}
          postedBy={postedBy}
          postDate={postDate}
          commentQuantity={comments.length}
        />
        <Container fixed>
          <Grid>
          {
            isEmpty(imageDefault) ?
              <Box className="blog-detail__content__image no-image"></Box> :
              <Grid item xs={10} className="blog-detail__content__image">
                <Box component={'img'} src={imageDefault}></Box>
              </Grid>
          }
            <Grid item container marginX={'auto'} xs={8}>
              <BlogContent image={imageDefault} content={content} />
              <BlogShare title={title} preview={previewBlog(content)} />
              <BlogAuthor author={author} />
              <BlogComment comment={comments} />
              <BlogCommentForm db={page.commentForm} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}
