import { Box, Container, Grid } from '@mui/material';
import './Service.scss';
import ServiceItem from './ServiceItem';

export default function Service({db}) {
  const {title, description, items} = db;
  return (
    <Box component={'section'} className="service spad">
      <Container fixed>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid item lg={12} >
           <Box className='section-title'>
              <Box component={'span'}>
                our services
              </Box>
              <Box component={'h2'}>
                {title}
              </Box>
              <Box component={'p'}>
                {description}
              </Box>
            </Box>
          </Grid>
          <Grid container>
            <ServiceItem items={items} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
