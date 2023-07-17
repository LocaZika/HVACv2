import { faFacebookF, faLinkedinIn, faRedditAlien, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from "@mui/material";
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton } from "react-share";
import './BlogShare.scss';
import PropTypes from 'prop-types';

const blogDetailLink = window.location.href;
export default function BlogShare({title, preview}) {
  return (
    <Grid container justifyContent={'center'} className='blog-detail__share'>
      <Grid item container justifyContent={'space-between'}>
        <FacebookShareButton
          resetButtonStyle={false}
          url={blogDetailLink}
          className="blog-detail__share__item fb"
          quote={title}
          hashtag="#hvac"
        >
          <FontAwesomeIcon icon={faFacebookF} />
          <Box component={'span'}>share</Box>
        </FacebookShareButton>
        <TwitterShareButton
          resetButtonStyle={false}
          url={blogDetailLink}
          className="blog-detail__share__item twitter"
          hashtags={['#hvac']}
          title={title}
          via="hvac"
        >
          <FontAwesomeIcon icon={faTwitter} />
          <Box component={'span'}>share</Box>
        </TwitterShareButton>
        <RedditShareButton
          resetButtonStyle={false}
          url={blogDetailLink}
          className="blog-detail__share__item reddit"
          title={title}
        >
          <FontAwesomeIcon icon={faRedditAlien} />
          <Box component={'span'}>share</Box>
        </RedditShareButton>
        <LinkedinShareButton
          resetButtonStyle={false}
          url={blogDetailLink}
          className="blog-detail__share__item linkedin"
          title={title}
          summary={preview}
          source="hvac"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
          <Box component={'span'}>share</Box>
        </LinkedinShareButton>
      </Grid>
    </Grid>
  )
}
BlogShare.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
}