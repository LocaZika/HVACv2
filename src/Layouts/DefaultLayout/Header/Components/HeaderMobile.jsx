import {
  Box,
  Button,
  Container,
  Grid,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import ContactBar from "./ContactBar";
import SearchDialog from "./SearchDialog";


export default function HeaderMobile(props) {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lgDown, menuItem } = props;
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const createTemplate = (menuItems) => {
    let template = [];
    for (let i = 0; i < menuItems.length; i++) {
      const {title, path} = menuItems[i];
      const component = (
        <ListItemButton key={i}>
          <NavLink to={path} onClick={toggleDrawer} >{title}</NavLink>
        </ListItemButton>
      );
      template.push(component);
    }
    return template;
  }
  const renderTemplate = useMemo(() => createTemplate(menuItem), [menuItem]);
  return (
    <Container fixed className="header__mobile">
      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Grid item className="header__mobile__logo">
          <Link to={'/'}>
            <Box component={'img'} src="https://preview.colorlib.com/theme/hvac/img/logo.png"></Box>
          </Link>
        </Grid>
        <Grid item className="header__mobile__drawer">
          <Button onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faBars} fontSize="22px" color="#323232" />
          </Button>
          <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
          >
            <Box className='header__mobile__drawer__wrapper'>
              <Box className='header__top__widget__items'>
                <Link to={'/cart'}>
                  <FontAwesomeIcon icon={faCartPlus} fontSize='15px' color="#353535" />
                </Link>
                <SearchDialog />
              </Box>
              <Box className='header__top__widget__logo'>
                <Link to={'/'}>
                  <Box component={'img'} src="https://preview.colorlib.com/theme/hvac/img/logo.png"></Box>
                </Link>
              </Box>
              <Box className='header__top__menu'>
                <List>
                  <ListItemButton onClick={handleClickMenu} className="header__top__menu__button" >
                    <ListItemText primary="Menu" />
                    {
                      menuOpen ? 
                        <FontAwesomeIcon icon={faCaretDown} /> :
                        <FontAwesomeIcon icon={faCaretDown} rotate={'180deg'} />
                    }
                  </ListItemButton>
                  <Collapse in={menuOpen} timeout="auto" unmountOnExit >
                    <List component="div" disablePadding className="header__top__menu__link">
                      <ListItemButton>
                        <NavLink to={'/'} end onClick={toggleDrawer}>home</NavLink>
                      </ListItemButton>
                      {renderTemplate}
                    </List>
                  </Collapse>
                </List>
              </Box>
              <ContactBar lgDown={lgDown} />
            </Box>
          </SwipeableDrawer>
        </Grid>
      </Grid>
    </Container>
  )
}
