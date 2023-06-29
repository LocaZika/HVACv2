import { Box, Button, Container, Unstable_Grid2 as Grid2, MenuItem, Select, TextField } from '@mui/material';
import './Call.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const {serviceId, templateId, publicKey} = {
  serviceId: import.meta.env.VITE_GMAIL_ID,
  templateId: import.meta.env.VITE_REQUEST_TEMPLATE,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};
export default function Call() {
  const [service, setService] = useState('');
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
  const handleChangeService = (e) => {
    setService(e.target.value);
  };
  const handleDate = () => {
    const date = new Date();
    const options = {
      date: `${date.getDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`,
      dateTime: `${date.getHours()}:${date.getMinutes()}`,
      timeZoneName: `UTC+${date.getTimezoneOffset() / -60}`,
    };
    return options.date + " " + options.dateTime + " " + options.timeZoneName;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then((result) => {
        setIsSending(false);
        console.log(result.text);
      }, (error) => {
        setIsSending(false);
        console.log(error.text);
      });
  };
  return (
    <Box component={'section'} className='call spad set-bg'>
      <Container fixed>
        <Grid2 container>
          <Grid2 md={6} lg={5} className='call__text'>
            <Box className='section-title'>
              <Box component={'h2'}>
                request a call back
              </Box>
              <Box component={'p'}>
                Posters had been a very beneficial marketing tool because it had paved to deliver an
                effective message that conveyed customer’s
              </Box>
            </Box>
            <Link to={'/contact'}>contact us</Link>
          </Grid2>
          <Grid2 md={6} lg={6} lgOffset={1}>
            <form className='call__form' ref={formRef} onSubmit={handleSubmit} >
              <Grid2 container sx={{margin: '0 -15px'}}>
                <Grid2 xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required variant='standard' label='Name' name='name' className='call__form__input' />
                </Grid2>
                <Grid2 xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required variant='standard' label='Email' name='email' className='call__form__input' />
                </Grid2>
                <Grid2 xs={12} lg={6} className='call__form__wrapper'>
                  <TextField required variant='standard' label='Phone' name='tel' className='call__form__input' />
                </Grid2>
                <Grid2 xs={12} lg={6} className='call__form__wrapper'>
                  <Select
                    value={service}
                    displayEmpty
                    onChange={handleChangeService}
                    className='call__form__input select'
                    name='service'
                  >
                    <MenuItem value='' sx={{
                      fontSize: '15px',
                      color: '#353535',
                    }}>choose our service</MenuItem>
                    <MenuItem value='buy'>buy cars</MenuItem>
                    <MenuItem value='sell'>sell cars</MenuItem>
                    <MenuItem value='wash'>wash cars</MenuItem>
                  </Select>
                </Grid2>
              </Grid2>
              <Button disabled={isSending} type='submit' className='site-btn'>submit now</Button>
              <input type='hidden' value={handleDate()} name='dateOfSending' readOnly />
            </form>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}
