import { Box, Container, Grid } from '@mui/material';
import './Latest.scss';
import { BlogCard } from 'Components';
import propTypes from 'prop-types';


export default function Latest({db, blog}) {
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
          {
            blog.map(item => <BlogCard key={item.id} db={item} />)
          }
        </Grid>
      </Container>
    </Box>
  )
}
Latest.propTypes = {
  db: propTypes.object.isRequired,
  blog: propTypes.array.isRequired,
}