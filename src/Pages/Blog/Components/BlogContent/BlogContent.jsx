import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import {BlogCard} from "Components";

export default function BlogContent({db}) {
  return (
    <Grid container>
      {
        db.map(blog => (
            <BlogCard key={blog.id} db={blog} viewMore={false} md={6} lg={6} />
        ))
      }
    </Grid>
  )
}
BlogContent.propTypes = {
  db: PropTypes.array,
}