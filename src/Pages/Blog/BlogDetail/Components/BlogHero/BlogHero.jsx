import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BlogHero.scss";
import { Box, Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { faCalendar, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function BlogHero({bg, title, subTitle, postedBy, postDate, commentQuantity}) {
  return (
    <Box
      className="blog-detail__hero spad set-bg"
      sx={{backgroundImage: `url(${bg})`}}
    >
      <Container fixed>
        <Grid justifyContent={'center'}>
          <Grid item lg={12} >
            <Box className='blog-detail__hero__text'>
              <Box component='span' className="blog-detail__hero__text__sub-title">{subTitle}</Box>
              <Box component='h2' className="blog-detail__hero__text__title">{title}</Box>
              <Box component='ul' className="blog-detail__hero__text__info">
                <Box component='li'>
                  <Box component={'span'}>
                    by&nbsp;{postedBy}
                  </Box>
                </Box>
                <Box component='li'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <Box component={'span'}>
                    {postDate}
                  </Box>
                </Box>
                <Box component='li'>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <Box component={'span'}>
                    {commentQuantity} comments
                  </Box>
                </Box>
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