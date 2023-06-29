import './SliderRange.scss';
import { useState } from 'react';
import { Box, Slider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sliderSlice } from './sliderSlice';

/**
 * 
 * @param {{min: number, max: number, title: string}} props Set props
 * @returns Slider component
 */
// eslint-disable-next-line react/prop-types
export default function SliderRange({min, max, title}) {
  const dispatch = useDispatch();
  const { setRangeValue } = sliderSlice.actions;
  const minProp = min ?? 0;
  const maxProp = max ?? 100;
  const defaultmin = Math.round(maxProp / 3);
  const defaultmax = Math.round(maxProp  * 2 / 3);
  const [value, setValue] = useState([defaultmin, defaultmax]);
  const titleProp = title ?? 'range';
  const handleChange = (e, newValue) => {
    setValue(newValue);
    dispatch(setRangeValue(newValue));
  };
  return (
    <Box className='slider-range'>
      <Box
        component={'p'}
        className='slider-range__title'
      >
        {titleProp}:&nbsp;
        <Box
          component={'span'}
          className='slider-range__value'
        >
          {`$${value[0]}-$${value[1]}`}
        </Box>
      </Box>
      <Slider
        value={value}
        onChange={handleChange}
        min={minProp}
        max={maxProp}
        className="slider-range__range"
      />
    </Box>
  )
}
