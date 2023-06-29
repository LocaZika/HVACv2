import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import './ChooseUs.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


export default function ChooseUs({db}) {
  const [active, setActive] = useState(false);
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const {title, description, reasons, video} = db;
  const handlePlay = () => {
    setActive(true);
  }
  const handlePause = () => {
    setActive(false);
  }
  return (
    <Box component={'section'}
      className={
        active === true ?
          'choose-us spad active' : 'choose-us spad'
      }>
      <Container fixed>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={5}
            marginBottom={
              breakpointFix === true ? '40px' : ''
            }
            className='choose-us__text'
          >
            <Box className='choose-us__text__title'>
              <Box component={'h2'}>
                {title}
              </Box>
              <Box component={'p'}>
                {description}
              </Box>
            </Box>
            <Box component={'ul'} className='choose-us__text__reasons'>
              {
                reasons.map((item, index) => (
                  <Box key={index} component={'li'} >
                    <FontAwesomeIcon icon={faCircleCheck} color='#db2d2e' />
                    {item}
                  </Box>
                ))
              }
            </Box>
            <Link to={'/about'} className='choose-us__text__link'>about us</Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={
              active === true ? 12 : 7
            }
            style={
              breakpointFix === true ? {
                position: 'unset',
                height: '530px',
                clipPath: 'none',
              } : {}
            }
            className='choose-us__video'
          >
            <ReactPlayer
              url={video}
              width={'100%'}
              height={'100%'}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
