/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SelectForm.scss';
import { Box, FormControl,Button, Grid } from '@mui/material';
import SelectFormItem from './SelectFormItem';
import { selectFormSlice } from './selectFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { sliderState } from 'Components/SliderRange/sliderSlice';
import SliderRange from 'Components/SliderRange/SliderRange';

/**
 * Create select form component
 * @param {{
 *  path: string,
 *  select: [{
  *  title: string,
  *  values: [value1: string, ...value]
  * }],
  * mode: 'search' | 'filter'
  * submitText: string,
  * onSubmit: function,
  * column: Set direction of items. Default is false
 * }} props set Props
 * 
 * @returns Component
 */
export default function SelectForm(props) {
  const [filterUrl, setFilterUrl] = useState('');
  const sliderValue = useSelector(sliderState);
  const dispath = useDispatch();
  const {select, submitText, titleInside, column} = props;
  // console.log(props);
  const { result } = selectFormSlice.actions;
  let columnProp = false;
  if (column !== undefined) {
    columnProp = true;
  }
  let titleInsideOpt = false;
  if (titleInside !== undefined){
    titleInsideOpt = true;
  }
  const setOptionUrl = (key, value) => {
    let url = {
      key,
      value
    }
    setFilterUrl(`${filterUrl}&${url.key}=${url.value}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <Grid className='select-form'>
      <form onSubmit={handleSubmit} >
        <Grid item container className='select-group' >
          {
            select.map(({title, values}, index) => (
              <Grid key={index} item xs={12} lg={5} sx={
                columnProp === true ? {flex: '0 0 100%', minWidth: '100%'} : {flex: '0 0 calc(50% - 20px)', minWidth: 'calc(50% - 20px)'}
                }>
              <FormControl className="select-group__control" >
                {
                  titleInsideOpt === true ?
                    null :
                    <Box component={'p'} className='select-group__title'>Select {title}</Box>
                }
                  <SelectFormItem
                    titleInside={titleInsideOpt}
                    menuItem={values}
                    title={title}
                    onSelect={(value) => setOptionUrl(title, value)}
                  />
                </FormControl>
              </Grid>
            ))
          }
        </Grid>
        <Grid item className='select-form__range'>
          <SliderRange min={1} max={1200000} title='price' />
        </Grid>
        <Button type='submit' className='select-form__submit'>{submitText}</Button>
      </form>
    </Grid>
  )
}
