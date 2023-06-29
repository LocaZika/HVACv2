import './Hero.scss';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Grid, Link, Tab, useMediaQuery } from "@mui/material";
import { useState } from "react";
import FormHeroSearch from "./FormHeroSearch";

export default function Hero({db}) {
  const [tab, setTab] = useState('1');
  const breakpointFix = useMediaQuery(theme => (
    theme.breakpoints.down('lg')
  ));
  const { items, title, hotSale, imageBg, imageLink } = db;
  const handleChangeTab = (e, newTab) => setTab(newTab);
  return (
     <Box component={'section'} className="hero set-bg" sx={{
      backgroundImage: `url(${imageBg})`,
     }}>
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={12} lg={7} sx={
              breakpointFix === true ? {
                paddingBottom: '40px',
              } : {
                paddingBottom: 0,
              }
            }>
              {/* Title */}
              <Box sx={{paddingTop: 13.75}}>
                <Box sx={{
                  marginBottom: 3.5,
                  color: '#fff',
                  fontWeight: '700',
                }}>
                  <Box component={'span'} sx={{
                    fontSize: '20px',
                    textTransform: 'uppercase',
                  }}>{title}</Box>
                  <Box sx={{
                    fontSize: '60px',
                    marginTop: '10px',
                  }}>{hotSale.name}</Box>
                </Box>
              </Box>
              {/* Price */}
              <Box sx={{
                paddingLeft: '140px',
                marginBottom: '55px',
                position: 'relative',
                textTransform: 'capitalize',
              }}>
                <Box sx={{
                  fontSize: '13px',
                  color: '#323232',
                  fontWeight: 700,
                  display: 'inline-block',
                  padding: '6px 14px',
                  background: '#ffffff',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}>
                  model {hotSale.model}
                </Box>
                <Box component={'h2'} sx={{
                  fontSize: '50px',
                  color: '#ffffff',
                  fontWeight: 700,
                  lineHeight: '45px',
                }}>
                  ${hotSale.price}
                  {
                    hotSale.status === 'rent' ? (
                      <Box component={'span'} sx={{
                        fontSize: '42px',
                        textTransform: 'capitalize',
                      }}>/month</Box>
                    ) : null
                  }
                </Box>
              </Box>
              {/* Links */}
              <Link href="#" className="hero__link">
                <img src={imageLink} alt="wheel icon" />
                test driver
              </Link>
              <Link href="#" className="hero__link" sx={{
                background: 'transparent !important',
                border: '1px solid #ffffff',
              }}>Learn more</Link>
            </Grid>
            <Grid item xs={12} md={12} lg={5}>
              <Box>
                <TabContext value={tab}>
                  <Box>
                    <TabList onChange={handleChangeTab}>
                      <Tab label='car rental' value='1' className="hero__tab" />
                      <Tab label='buy car' value='2' className="hero__tab" />
                    </TabList>
                  </Box>
                  <TabPanel value='1' className="hero__tab-panel">
                    <Box component={'h2'}>
                      find your dream car
                    </Box>
                    <FormHeroSearch select={items} />
                  </TabPanel>
                  <TabPanel value='2' className="hero__tab-panel">
                    <Box component={'h2'}>
                      buy your dream car
                    </Box>
                    <FormHeroSearch select={items} />
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
     </Box>
  )
}
