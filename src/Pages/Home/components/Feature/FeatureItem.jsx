import { Box, Unstable_Grid2 as Grid } from "@mui/material";

export default function FeatureItem({items}) {
  return (
    <>
      {
        items.map(({title, image}, index) => (
          <Grid key={index} sm={4} md={4} lg={6} className='feature__item'>
            <Box className='feature__item__icon' >
              <Box component={'img'} src={image}></Box>
            </Box>
            <Box component={'h6'}>{title}</Box>
          </Grid>
        ))
      }
    </>
  )
}
