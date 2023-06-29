import './ProductCard.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, CardActions, CardContent, Typography, Grid, Box, useMediaQuery, Skeleton } from "@mui/material";
import { Link } from 'react-router-dom';
import { spacetoDash } from 'Services/Ultilities';
import PropTypes from "prop-types";
import { toCurrency } from "Services/Ultilities";

/**
 * 
 * Create Product cards
 * @prop {array} product Set product array
 * @returns Product cards component
 */
export default function ProductCard({ product, xs, md, lg }) {
  const breakpointFix = useMediaQuery(theme => theme.breakpoints.down('md'));
  let xsProp = xs ?? 12;
  let mdProp = md ?? 4;
  let lgProp = lg ?? 3;
  return (
  <Grid item xs={xsProp} md={mdProp} lg={lgProp} className='product-card'>
    <Card sx={
      breakpointFix === true ? {
        maxWidth: '100%',
      } : {
        maxWidth: 345,
      }
    }>
      {
        !product ? <Skeleton animation='wave' height={151} variant='rectangular' /> : 
        <Carousel
          showThumbs={false}
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={false}
        >
          {product.images.map((image, index) => (
            <img key={index} src={image} alt='product-img' width={100} />
          ))}
        </Carousel>
      }
      <CardContent>
        <Typography
          component={'div'}
          fontSize={'13px'}
          color={'#323232'}
          fontWeight={700}
          padding={'2px 15px 1px'}
          border={'1px solid #ebebeb'}
          borderRadius={'2px'}
          width={'62px'}
        >
          {!product ? <Skeleton animation='wave' variant='rectangular' /> : product.yearOfManufacture}
        </Typography>
        <Typography
          gutterBottom
          component={'h5'}
          textTransform={'capitalize'}
          margin={'10px 0 14px 0'}
          fontSize={'18px'}
          minHeight={'54px'}
          height={'60px'}
        >
          {
            !product ? <Skeleton animation='wave' variant='rectangular' /> :
          <Link
            to={`car-detail/${product.id}/${spacetoDash(product.name).toLowerCase()}`}
            className='product-card__title'
          >{product.name}</Link>
          }
        </Typography>
        {
          !product ? <Skeleton animation='wave' height={24} variant='rectangular' /> :
          <Box
            component={'ul'}
            className='product-card__info'
          >
            <Box component={'li'}>
              <Box component={'span'}>{product.mpg}</Box>
              &nbsp;mi
            </Box>
            <Box component={'li'}>
              <Box component={'span'} textTransform={'capitalize'}>{product.gearboxType}</Box>
            </Box>
            <Box component={'li'}>
              <Box component={'span'}>{product.horsePower}</Box>
              &nbsp;hp
            </Box>
          </Box>
        }
      </CardContent>
      <CardActions className='product-card__price'>
        {
          !product ? <Skeleton animation='wave' variant='rectangular' height={101.6} width={44.5} /> :
          product.status === 'sale' ? (
            <Link to={`car-detail/${product.id}/${spacetoDash(product.name).toLowerCase()}`}
              className='product-card__price__option sale'
            >for sale</Link>
          ) : (
            <Link to={`car-detail/${product.id}/${spacetoDash(product.name).toLowerCase()}`}
              className='product-card__price__option'
            >for rent</Link>
          )
        }
        <Box
          component={'h6'}
          fontSize='15px'
          color='#db2d2e'
          fontWeight={700}
          width={'100%'}
          flex={'0 0 60%'}
        >
          {
            !product ? <Skeleton animation='wave' variant='rectangular' /> :
            (
              <>
                {toCurrency(product.price)}
                {
                  product.status === 'rent' ? (
                    <Box
                      component={'span'}
                      color='#727171'
                      fontSize='13px'
                      fontWeight={400}
                      textTransform={'capitalize'}
                    >/month</Box>
                  ) : null
                }
              </>
            )
          }
        </Box>
      </CardActions>
    </Card>
  </Grid>
);
}
ProductCard.propTypes = {
  product: PropTypes.object,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
}