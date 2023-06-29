import { Grid, Typography, Breadcrumbs, Container } from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material'
import './Breadcrumb.scss';
import { Link, useLocation,  } from 'react-router-dom';
import { slashToArray, dashToSpace } from 'Services/Ultilities';
import PropTypes from 'prop-types';

export default function Breadcrumb({title, currentPath}) {
  const {pathname} = useLocation();
  const pathArr = slashToArray(pathname); // ['car-listing', 'car-detail', '4', 'Bmw-s1000rr-2019-mx']
  const lastPath = dashToSpace(pathArr[pathArr.length - 1]);
  const defTitle = title ?? lastPath;
  const defCurrentPath = currentPath ?? defTitle;
  const paths = () => {
    let arr = [
      <Link key='breadcrumb-home' to={'/'} className='breadcrumb__link'>
        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>,
      <Typography key="breadcrum-path" color="text.primary" className='breadcrumb__path'
        sx={{
        fontSize: '15px',
        color: '#727171',
      }}
      >
        {
          defCurrentPath
        }
      </Typography>
    ];
    for (let i = 0; i < pathArr.length - 3; i++) {
      const path = pathArr[i];
      const convertedPath = dashToSpace(path);
      const template = <Link key='breadcrumb-prev' to={`/${path}`} className='breadcrumb__link'>{convertedPath}</Link>;
      arr.splice(i + 1, 0, template);
    }
    return arr;
  };
  return (
    <Grid className='breadcrumb set-bg'>
      <Container sx={{textAlign: 'center'}}>
        <Grid item lg={12}>
          <h2>{defTitle}</h2>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" sx={{fill: '#fff'}} />}
            aria-label="breadcrumb"
            sx={{m: 0}}
          >
            {paths()}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Grid>
  )
}
Breadcrumb.propTypes = {
  title: PropTypes.string,
  currentPath: PropTypes.string,
}