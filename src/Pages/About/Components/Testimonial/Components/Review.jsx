import { Box, Rating, Skeleton } from "@mui/material";
import PropTypes from 'prop-types';
import './Review.scss';

/**
 * reviews: [
 *  {
 *    name: "name",
 *    image: "image",
 *    text: "text",
 *    job: "job",
 *    rating: 4,
 *  }
 * ]
 */
export default function Review({db}) {
  if(!db) {
    return (
      <Box className='review'>
        <Box className='review__author'>
          <Box className='review__author__pic'>
            <Skeleton variant="circular" width={76} height={76} />
          </Box>
          <Box className='review__author__text'>
            <Box className='review__author__text__rating'></Box>
            <Box component={'h5'}>
              <Skeleton variant="rounded" />
            </Box>
          </Box>
        </Box>
        <Skeleton variant="text" />
      </Box>
    )
  }
  else return (
    <Box className='review'>
      <Box className='review__author'>
        <Box className='review__author__pic'>
          <Box component={'img'} src={db.image}></Box>
        </Box>
        <Box className='review__author__text'>
          <Rating defaultValue={0} value={db.rating} precision={0.5} readOnly />
          <Box component={'h5'}>
            {db.name}&nbsp;/&nbsp;
            <Box component={'span'}>{db.job}</Box>
          </Box>
        </Box>
      </Box>
      <Box component={'p'}>{db.text}</Box>
    </Box>
  )
}
Review.propTypes = {
  db: PropTypes.object.isRequired,
}