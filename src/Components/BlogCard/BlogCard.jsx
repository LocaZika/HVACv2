import { Box, Grid, Skeleton } from '@mui/material';
import './BlogCard.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { spacetoDash } from '../../Services/Ultilities';

export default function BlogCard({viewMore, db, xs, md, lg}) {
  const defViewMore = viewMore ?? true;

  /** xu ly khi chua co backend */
  function previewBlog(text) {
    const getFirstParagraph = text.split(/\n\n/)[0];
    //get word array
    const wordArr = getFirstParagraph.split(/\s/);
    //handle get 25 first words
    let newWordArr = [];
    for(let i = 0; i < 25; i++){
      newWordArr.push(wordArr[i]);
    }
    return newWordArr.join(" ") + "...";
  }
  if(!db){
    return <Skeleton animation='wave' height={'422.6px'} variant='rounded' />
  }else{
    const {id, title, image, postedBy, postDate, content, comments} = db;
    return (
      <Grid item xs={xs ?? 12} md={md ?? 6} lg={lg ?? 4} paddingX={'15px'}>
        <Box className='blog-card' >
            <Box className='blog-card__pic'>
              <Box
                width={'100%'}
                height={'220px'}
                borderRadius={'2px'}
                sx={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'top center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></Box>
              <Box component={'ul'}>
                <Box component={'li'}>
                  by&nbsp;{postedBy}
                </Box>
                <Box component={'li'}>
                  {postDate}
                </Box>
                <Box component={'li'}>
                  {comments.length}&nbsp;comments
                </Box>
              </Box>
            </Box>
            <Box className='blog-card__text'>
              <Link to={`/blog/blog-detail/${id}/${spacetoDash(title).toLowerCase()}`}>
                <Box component={'h5'}>
                  {title}
                </Box>
              </Link>
              <Box component={'p'}>
                {previewBlog(content)}
              </Box>
              {
                defViewMore === true ? (
                  <Link to={`/blog/blog-detail/${id}`}>
                    view more
                    <FontAwesomeIcon icon={faLongArrowRight} color='#db2d2e' />
                  </Link>
                ) : null
              }
            </Box>
          </Box>
      </Grid>
    )
  }
}
BlogCard.propTypes = {
  limit: PropTypes.number,
  viewMore: PropTypes.bool,
  db: PropTypes.object,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
}