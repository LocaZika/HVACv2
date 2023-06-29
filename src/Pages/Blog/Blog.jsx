import { Box, Container, Grid } from "@mui/material";
import { Breadcrumb } from "Components";
import {Pagination} from 'Components';
import {useFetch} from 'Services/Hooks';
import BlogContent from './Components/BlogContent/BlogContent';
import BlogSidebar from './Components/BlogSidebar/BlogSidebar';
import { useEffect, useState } from 'react';

const featureNews = [
  {id: 1, title: 'Feature News 1', postedBy: 'user1', postDate: '2014'},
  {id: 2, title: 'Feature News 2', postedBy: 'user2', postDate: '2015'},
  {id: 3, title: 'Feature News 3', postedBy: 'user3', postDate: '2016'},
]
export default function Blog() {
  const [page, setPage] = useState({});
  const [blog, setBlog] = useState([]);
  const pageApi = useFetch('blogPage');
  const blogApi = useFetch('blogs');
  useEffect(() => {
    pageApi.get().then(({data}) => setPage(data));
    blogApi.get().then(({data}) => setBlog(data));
  }, []);
  const handleClickPagination = (page) => {
    blogApi.get({limit: 6, page}).then(({data}) => setBlog(data));
  };
  const handleSearch = (keyword) => {
    blogApi.get({search: keyword}).then(({data}) => setBlog(data));
  };
  return (
    <>
      <Breadcrumb title="latest blogs" currentPath="our blogs" />
      <Box component={'section'} className="blog spad">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} lg={9}>
              <BlogContent db={blog} />
              <Pagination totalCount={blog.length} setPage={handleClickPagination} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <BlogSidebar pageDB={page} featureNews={featureNews} onSearch={handleSearch} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
