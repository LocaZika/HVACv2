import { NavLink, Link } from 'react-router-dom';
import ContactBar from './ContactBar';
import { Container, Grid, Paper, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';
import SearchDialog from './SearchDialog';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: 'none',
    boxShadow: 'none',
    lineHeight: '0',
    ...theme.typography.body2,
    padding: '0',
    marginRight: '60px',
  }));
export default function HeaderDesktop(props) {
  const { menuItem } = props;
  const createTemplate = (items) => {
    let template = [];
    for (let i = 0; i < items.length; i++) {
      const {title, path} = items[i];
      const component = (
        <Item key={i}>
          <NavLink to={path}>{title}</NavLink>
        </Item>
      );
      template.push(component);
    }
    return template;
  }
  const renderTemplate = useMemo(() => createTemplate(menuItem), [menuItem]);
  return (
    <>
      <ContactBar />
        <Container fixed>
          <Grid container justifyContent={'space-between'} alignItems={'center'} paddingY={4.375}>
            <Grid item md={2}>
              <Item>
                <Link to={'/'}>
                  <img src='https://preview.colorlib.com/theme/hvac/img/logo.png' alt="Logo" />
                </Link>
              </Item>
            </Grid>
            <Grid item container md={10} >
              <Grid container item md={9} justifyContent={'flex-end'} className='navbar' >
                <Item>
                  <NavLink to={'/'} end >home</NavLink>
                </Item>
                {renderTemplate}
              </Grid>
              <Grid container item md={3} >
                <Item>
                  <Link to={'/cart'}>
                    <FontAwesomeIcon icon={faCartPlus} />
                  </Link>
                </Item>
                <Item>
                  <SearchDialog />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Container>
    </>
  )
}
