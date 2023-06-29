import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toCurrency } from 'Services/Ultilities';
import './CarDetailSideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

export default function CarDetailSidebar({vin, stock, price, discount, pricingDate, pageData}) {
  const priceDiscount = () => {
    const priceDis = (price * discount) / 100;
    return toCurrency(priceDis);
  };
  const finalPrice = () => {
    const final = price - (price * discount) / 100;
    return toCurrency(final);
  };
  return (
    <Box className='car-detail__sidebar'>
      <Box className='car-detail__sidebar__model'>
        <Box component={'ul'}>
          <Box component={'li'}>
            stock
            <Box component={'span'}>{stock}</Box>
          </Box>
          <Box component={'li'}>
            vin
            <Box component={'span'}>{vin}</Box>
          </Box>
        </Box>
        <Link to={pageData.purchase.path} style={{marginBottom: 0}} className='primary-link'>{pageData.purchase.text}</Link>
        <Box component={'p'}>pricing in {pricingDate}</Box>
      </Box>
      <Box className='car-detail__sidebar__payment'>
        <Box component={'ul'}>
          <Box component={'li'} textTransform={'uppercase'}>
            msrp
            <Box component={'span'}>{toCurrency(price)}</Box>
          </Box>
          <Box component={'li'}>
            dealer discount
            <Box component={'span'}>{priceDiscount()}</Box>
          </Box>
          <Box component={'li'}>
            price
            <Box component={'span'} className='price'>{finalPrice()}</Box>
          </Box>
        </Box>
        <Link to={pageData.expressPurchase.path} className='primary-link'>
          <FontAwesomeIcon icon={faCreditCard} />
          {pageData.expressPurchase.text}
        </Link>
        <Link to={pageData.buildPayment.path} className='primary-link sidebar-item'>
          <FontAwesomeIcon icon={faSliders} />
          {pageData.buildPayment.text}
        </Link>
        <Link to={pageData.valueTrade.path} className='primary-link sidebar-item'>
          <FontAwesomeIcon icon={faMoneyBill1} />
          {pageData.valueTrade.text}
        </Link>
      </Box>
    </Box>
  )
}
CarDetailSidebar.propTypes = {
  vin: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  pricingDate: PropTypes.string.isRequired,
  pageData: PropTypes.object.isRequired,
}