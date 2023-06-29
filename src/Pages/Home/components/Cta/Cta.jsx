import { Box, Container, Grid } from '@mui/material';
import './Cta.scss';

export default function Cta({db}) {
  const {items} = db;
  return (
    <Box component={'section'} className='cta'>
      <Container fixed>
        <Grid container>
          {items.map(({title, image, text}, index) => (
            <Grid key={index} item xs={12} md={6} lg={6} paddingX={'15px'}>
              <Box className='cta__item set-bg' sx={{
                backgroundImage: `url(${image})`,
              }}>
                <Box component={'h4'}>{title}</Box>
                <Box component={'p'}>
                  {text}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
