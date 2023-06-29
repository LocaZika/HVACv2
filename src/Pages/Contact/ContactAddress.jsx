import { Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function ContactAddress({showroom}) {
  if(showroom === undefined) {
    return <div></div>
  }
  return (
      <Grid container padding={'100px 0 70px 0'}>
        {
          showroom.map(({name, address, email, tel}, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <div className="contact__address-item">
                <h4>{name}</h4>
                <p>
                  {address}<br />
                  {email}
                </p>
                <span>{tel}</span>
              </div>
            </Grid>
          ))
        }
      </Grid>
  )
}
ContactAddress.propTypes = {
  showroom: PropTypes.array,
}