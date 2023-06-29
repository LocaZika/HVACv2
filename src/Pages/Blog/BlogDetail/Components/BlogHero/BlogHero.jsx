import { Box, Container, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function BlogHero({bg, title, subTitle, postedBy, postDate, commentQuantity}) {
  return (
    <Box
      component={'section'}
      className="blog-detail-hero spad set-bg"
      sx={{backgroundImage: `url(${bg})`}}
    >
      <Container fixed>
        <Grid justifyContent={'center'}>
          <Grid item lg={10} >
            <Box className='blog-detail-hero__text'>
              <Box component='span'>{subTitle}</Box>
              <Box component='h2'>{title}</Box>
              <Box component='ul'>
                <Box component='li'>{postedBy}</Box>
                <Box component='li'>{postDate}</Box>
                <Box component='li'>{commentQuantity} comments</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
BlogHero.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  commentQuantity: PropTypes.number.isRequired,
}