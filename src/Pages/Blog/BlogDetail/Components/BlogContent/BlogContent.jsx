import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function BlogContent({image, content}) {
  return (
    <Box component={'section'} className="blog-detail"></Box>
  )
}
BlogContent.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}