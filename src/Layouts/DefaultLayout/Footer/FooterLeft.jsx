import { Grid, styled, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faTwitter, faSkype } from "@fortawesome/free-brands-svg-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  marginBottom: theme.spacing(2.5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));
export default function FooterLeft() {
  return (
    <>
      <Item>
        <Link to={'/'}>
          <img src='https://preview.colorlib.com/theme/hvac/img/footer-logo.png' alt="logo" />
        </Link>
      </Item>
      <Item>
        <p>
          Any questions? Let us know in store at 625 Gloria Union, California, United Stated or call us
          on (+84) 123 456 789
        </p>
      </Item>
      <Item>
        <Grid container className="footer__socials">
          <a href="https://facebook.com" className="facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://google.com" className="google">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://skype.com" className="skype">
            <FontAwesomeIcon icon={faSkype} />
          </a>
        </Grid>
      </Item>
    </>
  )
}
