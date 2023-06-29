import { useMediaQuery, Box, Container, Unstable_Grid2 as Grid, Link } from '@mui/material';
import './Feature.scss';
import FeatureItem from './FeatureItem';

export default function Feature({db}) {
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('lg'));
  const {title, description, items, image} = db;
  return (
    <Box component={'section'} className='feature spad' style={{'--bg-feature': `url(${image})`}}>
      <Container disableGutters={true} fixed={true} >
        <Grid container>
          <Grid sm={12} lg={4} paddingX={'15px'} sx={
            breakpointFix === true ? {
              paddingBottom: '500px',
            } : {
              paddingBottom: 0,
            }
          }>
            <Box className={'section-title feature__title'}>
              <Box component={'span'}>
                our features
              </Box>
              <Box component={'h2'}>{title}</Box>
            </Box>
            <Box className={'feature__desc'}>
              <Box component={'p'}>
                {description[0]}
              </Box>
              <Box component={'p'}>
                {description[1]}
              </Box>
            </Box>
            <Box className={'feature__link'}>
              <Link href='#' underline='none'>about us</Link>
              <Link href='#' underline='none' className='partners'>Our partners</Link>
            </Box>
          </Grid>
          <Grid sm={12} lg={4} lgOffset={4} paddingX={'15px'}>
            <Grid container>
              <FeatureItem items={items} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
