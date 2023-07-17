import { Box, Container, Grid } from '@mui/material';
import './Latest.scss';
import { BlogCard } from 'Components';
import PropTypes from 'prop-types';

export default function Latest({db}) {
  const {title, description} = db;
  return (
    <Box component={'section'} className={'lastest spad'}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Box className='section-title'>
              <Box component={'span'}>
                our blogs
              </Box>
              <Box component={'h2'}>
                {title}
              </Box>
              <Box component={'p'}>
                {description[0]} <br/>
                {description[1]}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <BlogCard limit={3} />
        </Grid>
      </Container>
    </Box>
  )
}
Latest.propTypes = {
  db: PropTypes.object.isRequired,
}