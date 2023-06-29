import { Carousel } from 'react-responsive-carousel';
import './CarDetailPic.scss';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function CarDetailPic({image}) {
  const [img, setImg] = useState([]);
  useEffect(() => {
    setImg(image);
  }, []);
  return (
    <Box className='car-detail__pic'>
      <Carousel
        showArrows={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        renderThumbs={(items) => {
          const thumbs = items.map((item, index) => (
            <Box key={index} className='car-detail__pic__thumb'>
              {item}
            </Box>
          ));
          return thumbs
        }}
        thumbWidth='150px'
      >
        {
          img.map((i, index) => (
            <img key={index} src={i} />
          ))
        }
      </Carousel>
    </Box>
  )
}
