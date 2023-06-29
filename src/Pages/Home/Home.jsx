import { Grid } from '@mui/material';
import './Home.scss';
import { Car, ChooseUs, Cta, Feature, Hero, Latest, Service } from './components';
import {  useEffect, useState } from 'react';
import { useFetch } from 'Services/Hooks';
import { Loader } from 'Components';

export default function Home() {
  const api = useFetch('homePage');
  const [homePage, setHomePage] = useState({
    data: undefined,
    loading: true,
  });
  useEffect(() => {
    api.get().then(({data}) => {
      setHomePage({data: data, loading: false});
    });
  }, []);
  if (homePage.loading === true){
    return <Loader />;
  }else{
    const {hero, services, features, car, chooseUs, blog, cta} = homePage.data;
    return (
      <Grid className='home' sx={{padding: 0}}>
        <Hero db={hero} />
        <Service db={services} />
        <Feature db={features} />
        <Car db={car} />
        <ChooseUs db={chooseUs} />
        <Latest db={blog} />
        <Cta db={cta} />
      </Grid>
    )
  }
}
