import { Box, Container, Grid } from "@mui/material";
import PropType from "prop-types";

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
BlogHero.propType = {
  bg: PropType.string.isRequired,
  title: PropType.string.isRequired,
  subTitle: PropType.string.isRequired,
  postBy: PropType.string.isRequired,
  postDate: PropType.string.isRequired,
  commentQuantity: PropType.number.isRequired,
}