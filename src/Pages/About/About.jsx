import './About.scss';
import { Breadcrumb } from 'Components';
import { useFetch } from 'Services/Hooks';
import { AboutUs, Call, Client, Counter, Team, Testimonial } from './Components';
import { useEffect, useState } from 'react';

export default function About() {
  const [page, setPage] = useState({});
  const api = useFetch('aboutPage');
  useEffect(() => {
    api.get().then(({data}) => setPage(data));
  }, []);
  const {
    aboutUs,
    call,
    team,
    testimonial,
    counter,
    client
  } = page;
  return (
    <>
      <Breadcrumb title='About Us' />
      <AboutUs db={aboutUs} />
      <Call db={call} />
      <Team db={team} />
      <Testimonial db={testimonial} />
      <Counter db={counter} />
      <Client db={client} />
    </>
  )
}
