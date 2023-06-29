import { Box, Container, Grid, Paper, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactBar.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: 'none',
    boxShadow: 'none',
    lineHeight: '0',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: '#fff',
}));
export default function ContactBar(props) {
  const { lgDown } = props;
  return (
    <div className='header__top'>
      {
        lgDown === true ? (
          <>
            <Box className='header__top__widget'>
              <Box component={'ul'} className='header__top__widget__info'>
                <Box component={'li'}>
                  <FontAwesomeIcon icon={faClock} />
                  Week day: 08:00 am to 18:00 pm
                </Box>
                <Box component={'li'}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  locazika@gmail.com
                </Box>
                <Box component={'li'}>
                  <FontAwesomeIcon icon={faPhone} />
                  (+84) 123 456 789
                </Box>
              </Box>
              <Box component={'ul'} className='header__top__widget__social'>
                <Box component={'li'}>
                  <a href="https://facebook.com/locazika">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </Box>
                <Box component={'li'}>
                  <a href="https://twitrer.com">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Box>
                <Box component={'li'}>
                  <a href="https://google.com">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                </Box>
                <Box component={'li'}>
                  <a href="https://instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Container fixed>
            <Grid container>
              <Grid container item lg={7} paddingY={0} sx={{alignItems: 'center'}}>
                <Grid item md={6}>
                  <Item>
                    <FontAwesomeIcon icon={faClock} className='contact-icon' />
                    <span> Week day: 08:00 am to 18:00 pm</span>
                  </Item>
                </Grid>
                <Grid item md={6}>
                  <Item>
                    <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                    <span> locazika@gmail.com</span>
                  </Item>
                </Grid>
              </Grid>
              <Grid container item lg={5} sx={{alignItems: 'center', textAlign: 'right'}}>
                <Grid item md={6}>
                  <Item>
                    <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                    <span style={{fontSize: '15px'}}> (+84) 123 456 789</span>
                  </Item>
                </Grid>
                <Grid item md={6}>
                  <Item>
                    <Grid container justifyContent={'flex-end'}>
                      <Item className='social-icon'>
                        <a href="https://facebook.com/locazika">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </Item>
                      <Item className='social-icon'>
                        <a href="https://twitrer.com">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </Item>
                      <Item className='social-icon'>
                        <a href="https://google.com">
                          <FontAwesomeIcon icon={faGoogle} />
                        </a>
                      </Item>
                      <Item className='social-icon'>
                        <a href="https://instagram.com">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </Item>
                    </Grid>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        )
      }
    </div>
  )
}
