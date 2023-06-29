import { Box, Container, Grid } from '@mui/material';
import './Team.scss';

const experts = [
  {name: 'john smith', career: 'marketing', image: 'https://preview.colorlib.com/theme/hvac/img/about/team-1.jpg'},
  {name: 'christine wise', career: 'C.E.O', image: 'https://preview.colorlib.com/theme/hvac/img/about/team-2.jpg'},
  {name: 'sean robbins', career: 'manager', image: 'https://preview.colorlib.com/theme/hvac/img/about/team-3.jpg'},
  {name: 'lucy myers', career: 'delivary', image: 'https://preview.colorlib.com/theme/hvac/img/about/team-4.jpg'},
];
export default function Team() {
  return (
    <Box component={'section'} className='team spad'>
      <Container fixed>
        <Grid container>
          <Grid item lg={12} sx={{width: '100%'}}>
            <Box className='section-title team-title'>
              <Box component={'span'}>our team</Box>
              <Box component={'h2'}>meet our expert</Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{margin: '0 -15px', width: 'unset'}}>
          {
            experts.map(({name, career, image}, index) => (
              <Grid key={index} item xs={12} md={6} lg={3} paddingX={'15px'}>
                <Box className='team__item'>
                  <Box component={'img'} src={image}></Box>
                  <Box className='team__item__text'>
                    <Box component={'h5'}>{name}</Box>
                    <Box component={'span'}>{career}</Box>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}
