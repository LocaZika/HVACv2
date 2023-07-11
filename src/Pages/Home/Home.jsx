import { Grid } from '@mui/material';
import './Home.scss';
import { Car, ChooseUs, Cta, Feature, Hero, Latest, Service } from './components';
import {  useEffect, useState } from 'react';
import { useFetch } from 'Services/Hooks';
import { Loader } from 'Components';

export default function Home() {
  const api = useFetch();
  const [homePage, setHomePage] = useState({
    data: undefined,
    loading: true,
  });
  const [latestBlog, setLatestBlog] = useState([]);
  useEffect(() => {
    api.get({path: 'homePage'}).then(({data}) => {
      setHomePage({data: data, loading: false});
    });
    api.get({path: 'blogs', limit: 3}).then(({data}) => {
      setLatestBlog(data);
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
        <Latest db={blog} blog={latestBlog} />
        <Cta db={cta} />
      </Grid>
    )
  }
}
