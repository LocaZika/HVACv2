import { useParams } from 'react-router-dom';
import './CarDetail.scss';
import { useFetch } from 'Services/Hooks';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'Components';
import { Box, Container, Grid } from '@mui/material';
import { Loader } from 'Components';
import CarDetailPic from './Components/CarDetailPic/CarDetailPic';
import CarDetailTab from './Components/CarDetailTab/CarDetailTab';
import CarDetailSidebar from './Components/CarDetailSidebar/CarDetailSidebar';
import { isEmpty } from 'lodash';

export default function CarDetail() {
  const [page, setPage] = useState({});
  const [carData, setCarData] = useState({});
  const {pid} = useParams();
  const carApi = useFetch('cars/' + pid);
  const pageApi = useFetch('carDetailPage');
  useEffect(() => {
    pageApi.get().then(({data}) => setPage(data));
    carApi.get().then(({data}) => setCarData(data));
  }, []);
  if (isEmpty(carData) === true) {
    return <Loader />
  }
  return (
    <>
      <Breadcrumb title={carData.name} />
      <Box component={'section'} className='car-detail spad'>
        <Container fixed>
          <Grid container className='car-detail--container'>
            <Grid item xs={12} md={9} lg={9} className='car-detail__section'>
              <CarDetailPic image={carData.images} />
              <CarDetailTab tabDB={carData.tabs} />
            </Grid>
            <Grid item xs={12} md={3} lg={3} className='car-detail__section'>
              <CarDetailSidebar
                vin={carData.vin}
                stock={carData.stock}
                discount={carData.discount}
                price={carData.price}
                pricingDate={carData.pricingDate}
                pageData={page}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
