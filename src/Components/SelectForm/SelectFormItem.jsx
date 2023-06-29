import { Select, MenuItem, Box } from "@mui/material";
import { useState } from "react";

/**
 * 
 * @param {{menuItem: array}} props Set props
 * @returns Component
 */
export default function SelectFormItem(props) {
  const [value, setValue] = useState('');
  const { menuItem, title, onSelect, titleInside } = props;
  const handleChange = (e) => {
    setValue(e.target.value);
    onSelect(title, e.target.value);
  };
  return (
    <>
      <Select
        displayEmpty={titleInside === true ? true : false}
        value={value}
        onChange={handleChange}
        className="select-group__box"
        renderValue={
          value === '' ? undefined :
          () => <Box textTransform={'capitalize'}>select{title}</Box>
        }
      >
        <MenuItem disabled value='' className='select-form__option disable' >select {title}</MenuItem>
        {
          menuItem.map((value, index) => (
            <MenuItem key={index} value={`${value}`} className='select-form__option'>{value}</MenuItem>
          ))
        }
      </Select>
    </>
  )
}
