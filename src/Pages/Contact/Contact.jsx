import { Breadcrumb } from 'Components';
import { Container, Grid, Skeleton } from '@mui/material';
import ContactForm from './ContactForm';
import ContactAddress from './ContactAddress';
import { useEffect, useState } from 'react';
import { useFetch } from 'Services/Hooks';
import { isEmpty } from 'lodash';

export default function Contact() {
  const [page, setPage] = useState({});
  
  const api = useFetch("contactPage");
  useEffect(() => {
    api.get().then(({data}) => {
      setPage(data);
      console.log(data);
    });
  }, [])
  if(isEmpty(page) === true){
    return <Skeleton width='200px' animation='wave' />
  }else{
    return (
      <div className='contact'>
        <Breadcrumb currentPath={'contact us'} />
        <Container fixed>
          <Grid paddingY={12.5} borderBottom={'1px solid rgba(0, 0, 0, 0.1)'}>
            <ContactForm title={page.title} text={page.text} schedule={page.schedule} />
          </Grid>
          <Grid>
            <ContactAddress showroom={page.showroom} />
          </Grid>
        </Container>
      </div>
    )
  }
}
