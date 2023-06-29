import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import './Testimonial.scss';
import { Carousel } from 'react-responsive-carousel';
import Review from './Components/Review';

const testimonial = {
  title: 'testimonial',
  description: 'What People Say About Us',
  text: 'Our customers are our biggest supporters. What do they think of us? Lorem',

}
const reviews = [
  {
    name: "John Smith",
    image: "https://preview.colorlib.com/theme/hvac/img/testimonial/testimonial-1.png",
    job: "CEO",
    rating: 5,
    text: "For one thing they usually step all over the hedges and plants on the side of someone's house killing"
  },
  {
    name: "Emma Sandoval",
    image: "https://preview.colorlib.com/theme/hvac/img/testimonial/testimonial-2.png",
    job: "maketing manager",
    rating: 5,
    text: "It seems though that some of the biggest problems with the internet advertising trends are the lack of"
  },
]
export default function Testimonial() {
  const checkBreakpoint = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Box component={'section'} className='testimonial spad'>
      <Container fixed>
        <Grid item xs={12}>
          <Box className='section-title testimonial-title'>
            <Box component={'span'}>{testimonial.title}</Box>
            <Box component={'h2'}>{testimonial.description}</Box>
            <Box component={'span'}>{testimonial.text}</Box>
          </Box>
        </Grid>
        <Grid>
          <Carousel
            showThumbs={false}
            centerMode={checkBreakpoint}
            centerSlidePercentage={50}
            emulateTouch={true}
            swipeable={true}
            infiniteLoop={true}
          >
            {reviews.map((review, index) => <Review key={index} db={review} />)}
          </Carousel>
        </Grid>
      </Container>
    </Box>
  )
}
