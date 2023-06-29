import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import './Car.scss';
import { useEffect, useState } from 'react';
import { useFetch } from 'Services/Hooks';
import { PropTypes } from 'prop-types';
import { ProductCard } from 'Components';

const allyProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});
const TabPanel = (props) => {
  
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container>
          {children}
        </Grid>
      )}
    </div>
  )
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function Car({db}) {
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState([]);
  const {title, tabLabels} = db;
  const api = useFetch('cars');
  // let products = [];
  useEffect(() => {
    api.get({limit: 4}).then(({data}) => setProducts(data));
  }, []);
  const handleChangeTab = (e, newvalue) => {
    setActiveTab(newvalue);
  }
  const saleProducts = products.filter(product => product.status === 'sale');
  return (
    <Box component={'section'} className='car spad'>
      <Container fixed>
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item lg={12}>
            <Box className='section-title car__title'>
              <Box component={'span'}>our car</Box>
              <Box component={'h2'}>{title}</Box>
            </Box>
            <Box className='car__filter'>
              <Tabs value={activeTab} onChange={handleChangeTab} sx={{
                marginBottom: '40px',
              }}>
                <Tab label={tabLabels[0]} {...allyProps(0)} />
                <Tab label={tabLabels[1]} {...allyProps(1)} />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        <Grid container >
          <TabPanel value={activeTab} index={0}>
            {
              products.map(product => (
                <ProductCard key={product.id} product={product} xs={12} md={4} lg={3} />
              ))
            }
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            {
              saleProducts.map(product => (
                <ProductCard key={product.id} product={product} xs={12} md={4} lg={3} />
              ))
            }
          </TabPanel>
        </Grid>
      </Container>
    </Box>
  )
}
