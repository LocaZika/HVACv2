import { formatText } from 'Services/Ultilities';
import './AboutUs.scss';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function AboutUs({db}) {
  if(!db){
    return <Skeleton variant='rectangular' animation='wave' height={1369} />
  }else{
    const {title, description, features, orientation} = db;
    return (
      <Box component={'section'} className="about spad">
        <Container fixed>
          <Grid container>
            <Grid item lg={12} className="section-title about__title">
              <Box component={'h2'}>
                {
                  title.map((t, index) => (
                    <Fragment key={index}>{t}<br /></Fragment>
                  ))
                }
              </Box>
              <Box component={'p'}>
                {
                  description.map((d, index) => (
                    <Fragment key={index}>{d}<br /></Fragment>
                  ))
                }
              </Box>
            </Grid>
            <Grid container className='about__features'>
              {
                features.map(({title, image, text}, index) => (
                  <Grid key={index} item xs={12} md={6} lg={4} className='about__features__item'>
                    <Box component={'img'} src={image}></Box>
                    <Box component={'h5'}>{title}</Box>
                    <Box component={'p'}>{formatText(text)}</Box>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container className='about__orientation'>
              <Grid item lg={12} className='about__orientation__image'>
                <Box component={'img'} src={orientation.image}></Box>
              </Grid>
              <Grid container item lg={12} marginX={'-13px'}>
                {
                  orientation.items.map(({title, text}, index) => (
                    <Grid key={index} item sm={12} md={6} lg={6} className='about__orientation__item'>
                      <Box component={'h5'}>{title}</Box>
                      <Box component={'p'}>{text}</Box>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}
AboutUs.propTypes = {
  db: PropTypes.object,
};