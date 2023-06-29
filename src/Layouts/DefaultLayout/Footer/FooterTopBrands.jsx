import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const topBrands1 = ['abarth', 'lamborghini', 'bugati', 'KIA'];
const topBrands2 = ['BMW', 'chevrolet', 'ferrari', 'honda'];
export default function FooterTopBrands() {
  return (
    <div className="footer__top-brands">
      <div className="footer__widget">
        <h5>top brands</h5>
        <Grid container>
          <ul>
            {
              topBrands1.map((item, index) => (
                <li key={index}>
                  <Link to={'/'}>
                    <FontAwesomeIcon icon={faAngleRight} />
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
          <ul>
            {
              topBrands2.map((item, index) => (
                <li key={index}>
                  <Link to={'/'}>
                    <FontAwesomeIcon icon={faAngleRight} />
                    {item}
                  </Link>
                </li>
              ))
            }
          </ul>
        </Grid>
      </div>
    </div>
  )
}
