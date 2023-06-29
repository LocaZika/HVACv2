import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Box, Link } from "@mui/material";

export default function ServiceItem({items}) {
  return (
    <>
      {
        items.map(({title, image, text}, index) => (
          <Grid key={index} item paddingX={'15px'} xs={12} md={6} lg={3}>
            <Box className="service__item">
              <Box
                component={'img'}
                src={image}
              ></Box>
              <Box component={'h5'}>{title}</Box>
              <Box component={'p'}>{text}</Box>
              <Link
                href="/"
              >
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Link>
            </Box>
          </Grid>
        ))
      }
    </>
  )
}
