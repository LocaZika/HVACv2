import { Box } from '@mui/material';
import PropTypes from  'prop-types';
import './BlogAuthor.scss';

export default function BlogAuthor({author}) {
  return (
    <Box className="blog-detail__author">
      <Box className="blog-detail__author__pic">
        <Box component={'img'} src={author.img} alt='avatar author'/>
      </Box>
      <Box className="blog-detail__author__text">
        <Box component={'h5'}>{author.name}</Box>
        <Box component={'p'}>{author.description}</Box>
      </Box>
    </Box>
  )
}
BlogAuthor.propTypes = {
  author: PropTypes.object.isRequired,
}