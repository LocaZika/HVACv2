import { FormControl, Box, Select, MenuItem, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { formHeroState } from "./formHeroSlice";
import { Fragment } from "react";

export default function FormHeroSelect({db, selectFunction}) {
  const selector = useSelector(formHeroState);
  const selectorValue = Object.values(selector); // array functions of selector
  const objLength = Object.keys(db).length; // length of objects
  let renderTemplate = [];
  const handleRender = () => {
    for (let i = 0; i < objLength; i++) {
      const objValue = Object.values(db)[i]; // object of values
      renderTemplate.push(
        <Grid item xs={12} md={6} lg={6}>
          <FormControl className="select__form" >
            <Box component={'p'}>{objValue.title}</Box>
              <Select
                value={selectorValue[i]}
                onChange={selectFunction[i]}
                className="select__form__box"
              >
                {
                  objValue.values.map((item, index) => (
                    <MenuItem key={index} value={`${item}`}>{item}</MenuItem>
                  ))
                }
              </Select>
          </FormControl>
        </Grid>
      )
    }
  };
  handleRender();
  return (
    <>
      {
        renderTemplate.map((component, index) => (
          <Fragment key={index}>
            {component}
          </Fragment>
        ))
      }
    </>
  )
}
