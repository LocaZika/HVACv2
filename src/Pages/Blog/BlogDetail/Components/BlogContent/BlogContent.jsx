import "./BlogContent.scss";
import { Box } from "@mui/material";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";


export default function BlogContent({content}) {
  return (
      <Box className="blog-detail__content">
        <Markdown
          options={{
            wrapper: 'div',
            overrides: {
              p: {
                props: {
                  className: "blog-detail__content__text"
                }
              },
              blockquote: {
                props: {
                  className: "blog-detail__content__quote"
                }
              }
            }
          }}
        >{content}</Markdown>
      </Box>
  )
}
BlogContent.propTypes = {
  content: PropTypes.string.isRequired
}