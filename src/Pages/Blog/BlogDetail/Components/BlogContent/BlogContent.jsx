import "./BlogContent.scss";
import { Box, Container, Grid } from "@mui/material";
import { isEmpty } from "lodash";
import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";

const mdComponent = ({children}) => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={8}>{children}</Grid>
    </Grid>
  )
}
export default function BlogContent({image, content}) {
  return (
    <Container fixed>
      <Grid className="blog-detail__content">
        {
          isEmpty(image) ?
            <Box className="blog-detail__content__image no-image"></Box> :
            <Grid item xs={10} className="blog-detail__content__image">
              <Box component={'img'} src={image}></Box>
            </Grid>
        }
        <Markdown
          options={{
            wrapper: mdComponent,
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
      </Grid>
    </Container>
  )
}
BlogContent.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}