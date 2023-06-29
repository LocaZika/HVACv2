import { FormGroup, Grid } from "@mui/material";
import { SelectForm } from "Components";

export default function FormHeroSearch(props) {
  const {select} = props;
  return (
    <FormGroup>
      <Grid container className="hero__tab-panel__form">
        <Grid
          item
          container
          sx={{padding: 0}}
        >
          <SelectForm select={select} submitText="Search" />
        </Grid>
      </Grid>
    </FormGroup>
  )
}
