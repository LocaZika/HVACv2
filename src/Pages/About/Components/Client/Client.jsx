import { Box, Container, Grid, Skeleton } from '@mui/material';
import './Client.scss';
import PropTypes from 'prop-types';

export default function Client({db}) {
  if(!db){
    <Skeleton animation='wave' variant='rectangular' height={402} />
  }else{
    const {title, subTitle, items} = db;
    return (
      <Box component='section' className='client spad'>
        <Container fixed>
          <Grid container>
            <Grid item xs={12} className='section-title client-title'>
              <Box component='span'>{subTitle}</Box>
              <Box component='h2'>{title}</Box>
            </Grid>
          </Grid>
          <Grid container>
            {
              items.map(({path, image, alt}, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3} paddingX={'15px'} >
                  <Box component='a' href={path} className='client__item' >
                    <Box component='img' src={image} alt={alt} ></Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    )
  }
}
Client.propTypes = {
  db: PropTypes.object,
}