import { useEffect, useState } from "react";
import {BlogHero, BlogContent} from "./Components";
import {useFetch} from "Services/Hooks";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Loader } from "Components";

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
    const {title, subTitle, image, postBy, postDate, content, comments} = blogData;
    return (
      <>
        <BlogHero
          bg={backgroundHero}
          title={title}
          subTitle={subTitle}
          postedBy={postBy}
          postDate={postDate}
          commentQuantity={comments.length}
        />
        <BlogContent image={image} content={content} />
      </>
    )
  }
}
