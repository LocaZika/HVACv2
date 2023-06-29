import { Box, Container, Grid, Skeleton } from '@mui/material';
import './Counter.scss';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

export default function Counter({db}) {
  if(!db){
    return <Skeleton variant='rectangular' animation='wave' height={132} />
  }else{
    const {image, items} = db;
    return (
      <Box component={'section'} className="counter set-bg" style={{backgroundImage: `url(${image})`}}>
        <Container fixed>
          <Grid container className='counter__content'>
            {
              items.map(({title, number}, index) => {
                if(title !== "vehicles sale"){
                  return (
                    <Grid key={index} item xs={12} md={6} lg={3} className='counter__content__item'>
                      <Box component={'h2'}>
                        <CountUp
                          delay={5}
                          start={0}
                          end={number ?? 0}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                        /></Box>
                      <Box component={'p'}>{title}</Box>
                    </Grid>
                  )
                }else if(number <= 1500){
                  return (
                    <Grid key={index} item xs={12} md={6} lg={3} className='counter__content__item'>
                      <Box component={'h2'}>
                        <CountUp
                          delay={5}
                          start={0}
                          end={number ?? 0}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                        /></Box>
                      <Box component={'p'}>{title}</Box>
                    </Grid>
                  )
                }else{
                  return (
                    <Grid key={index} item xs={12} md={6} lg={3} className='counter__content__item'>
                      <Box component={'h2'}>
                        <CountUp
                          delay={5}
                          start={0}
                          end={1500}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                        /></Box>
                      <Box component={'strong'}>+</Box>
                      <Box component={'p'}>{title}</Box>
                    </Grid>
                  )
                }
              })
            }
          </Grid>
        </Container>
      </Box>
    )
  }
}
Counter.propTypes = {
  db: PropTypes.object,
};