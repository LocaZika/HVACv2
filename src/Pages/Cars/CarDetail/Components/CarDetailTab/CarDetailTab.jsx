import { useEffect, useState } from 'react';
import './CarDetailTab.scss';
import { Box, Tab, Tabs, Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function CarDetailTab({tabDB}) {
  const [db, setDb] = useState({});
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  }
  useEffect(() => {
    setDb(tabDB);
  }, [tabDB]);
  if (isEmpty(db) === true) {
    return <></>
  }
  return (
    <Box className='car-detail__tab'>
      <Box className='car-detail__tab__nav-tab'>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label={db.overview.title} className='nav-item' {...a11yProps} />
          <Tab label={db.technical.title} className='nav-item' {...a11yProps} />
          <Tab label={db.featureAndOption.title} className='nav-item' {...a11yProps} />
          <Tab label={db.location.title} className='nav-item' {...a11yProps} />
        </Tabs>
      </Box>
      <Box className="car-detail__tab__tab-panel">
        <TabPanel value={value} index={0}>
          <Container fixed sx={{p: '0 !important'}}>
            <Grid container className='car-detail__tab__tab-panel__info'>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.overview.info.title + value}</Box>
                <Box component={'ul'}>
                  {
                    db.overview.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.overview.info.title}</Box>
                <Box component={'ul'}>
                  {
                    db.overview.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
            <Grid container className='car-detail__tab__tab-panel__feature'>
              {
                db.overview.feature.map((item, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3} className='car-detail__tab__tab-panel__item'>
                    <Box component={'h5'}>{item.title}</Box>
                    <Box component={'ul'}>
                      {
                        item.items.map((i, index) => (
                          <Box key={index} component={'li'}>
                            <FontAwesomeIcon icon={faCheckCircle} color='#db2d2e' />
                            {i}
                          </Box>
                        ))
                      }
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container fixed sx={{p: '0 !important'}}>
            <Grid container className='car-detail__tab__tab-panel__info'>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.technical.info.title + value}</Box>
                <Box component={'ul'}>
                  {
                    db.technical.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.technical.info.title}</Box>
                <Box component={'ul'}>
                  {
                    db.technical.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
            <Grid container className='car-detail__tab__tab-panel__feature'>
              {
                db.technical.feature.map((item, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3} className='car-detail__tab__tab-panel__item'>
                    <Box component={'h5'}>{item.title}</Box>
                    <Box component={'ul'}>
                      {
                        item.items.map((i, index) => (
                          <Box key={index} component={'li'}>
                            <FontAwesomeIcon icon={faCheckCircle} color='#db2d2e' />
                            {i}
                          </Box>
                        ))
                      }
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container fixed sx={{p: '0 !important'}}>
            <Grid container className='car-detail__tab__tab-panel__info'>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.featureAndOption.info.title + value}</Box>
                <Box component={'ul'}>
                  {
                    db.featureAndOption.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.featureAndOption.info.title}</Box>
                <Box component={'ul'}>
                  {
                    db.featureAndOption.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
            <Grid container className='car-detail__tab__tab-panel__feature'>
              {
                db.featureAndOption.feature.map((item, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3} className='car-detail__tab__tab-panel__item'>
                    <Box component={'h5'}>{item.title}</Box>
                    <Box component={'ul'}>
                      {
                        item.items.map((i, index) => (
                          <Box key={index} component={'li'}>
                            <FontAwesomeIcon icon={faCheckCircle} color='#db2d2e' />
                            {i}
                          </Box>
                        ))
                      }
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Container fixed sx={{p: '0 !important'}}>
            <Grid container className='car-detail__tab__tab-panel__info'>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.location.info.title + value}</Box>
                <Box component={'ul'}>
                  {
                    db.location.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className='car-detail__tab__tab-panel__item'>
                <Box component={'h5'}>{db.location.info.title}</Box>
                <Box component={'ul'}>
                  {
                    db.location.info.items.map((item, index) => (
                      <Box key={index} component={'li'}>
                        <FontAwesomeIcon icon={faCheck} color='#db2d2e' />
                        {item}
                      </Box>
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
            <Grid container className='car-detail__tab__tab-panel__feature'>
              {
                db.location.feature.map((item, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3} className='car-detail__tab__tab-panel__item'>
                    <Box component={'h5'}>{item.title}</Box>
                    <Box component={'ul'}>
                      {
                        item.items.map((i, index) => (
                          <Box key={index} component={'li'}>
                            <FontAwesomeIcon icon={faCheckCircle} color='#db2d2e' />
                            {i}
                          </Box>
                        ))
                      }
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </TabPanel>
      </Box>
    </Box>
  )
}
CarDetailTab.propTypes = {
  tabDB: PropTypes.object.isRequired,
}