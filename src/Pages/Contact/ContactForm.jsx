import { Box, Button, Container, Grid, TextField, TextareaAutosize } from "@mui/material";
import './Contact.scss';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const {serviceId, templateId, publicKey} = {
  serviceId: import.meta.env.VITE_GMAIL_ID,
  templateId: import.meta.env.VITE_CONTACT_TEMPLATE,
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
};
export default function ContactForm({title, text, schedule}) {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
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
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
    .then((result) => {
        setIsSending(false);
        console.log(result.text);
      }, (error) => {
        setIsSending(false);
        console.log(error.text);
      });
  };
  if(title === undefined || text === undefined || schedule === undefined ){
    return <div></div>
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Grid container className="contact__form">
        <Grid item md={6} lg={6} className="contact__form-schedule">
          <Container fixed>
            <Box className="contact__form-schedule-title">
              <Box component={'h2'}>{title}</Box>
              <Box component={'p'}>{text}</Box>
            </Box>
            <Box component={'ul'}>
              {
                schedule.map(({title, text}, index) => (
                  <Box key={index} component={'li'}><Box component={'span'}>{title}</Box>{text}</Box>
                ))
              }
              
            </Box>
          </Container>
        </Grid>
        <Grid item md={6} lg={6}>
          <Container fixed>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                textAlign={'center'}
                marginBottom={3.75}
              >
                <Container fixed>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Name"
                    name="name"
                    variant="outlined"
                    className="contact__form-textfield"
                  />
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                textAlign={'center'}
                marginBottom={3.75}
              >
                <Container fixed>
                  <TextField 
                    required 
                    id="outlined-basic" 
                    label="Email"
                    name="email"
                    variant="outlined"
                    className="contact__form-textfield"
                  />
                </Container>
              </Grid>
            </Grid>
            <Container fixed>
              <Grid
                item
                md={12}
                lg={12}
                marginBottom={3.75}
              >
                <TextField 
                  required 
                  id="outlined-basic" 
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  className="contact__form-textfield"
                />
              </Grid>
            </Container>
            <Container fixed>
              <Grid item md={12} lg={12}>
                <TextareaAutosize
                  required
                  id="outlined-basic"
                  maxRows={4}
                  name="question"
                  placeholder="Your Question"
                  className="contact__form-textarea"
                />
              </Grid>
            </Container>
            <Button
              type="submit"
              disabled={isSending}
              sx={{
                padding: '15px 35px',
                backgroundColor: '#db2d2e',
                fontSize: '15px',
                color: '#fff',
                textTransform: 'capitalize',
                fontWeight: 700,
                margin: '15px',
                '&:hover': {
                  backgroundColor: '#db2d2e',
                }
              }}
            >submit now</Button>
          </Container>
        </Grid>
      </Grid>
      <input type="text" hidden value={handleDate()} name="dateOfSending" readOnly />
    </form>
  )
}
ContactForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  schedule: PropTypes.array,
}