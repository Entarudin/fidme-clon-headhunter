import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';
import { Sidebar } from 'primereact/sidebar';
export const StyledToolbar = styled(Toolbar)(({}) => ({
  color: 'white'
}));
export const StyledHeader = styled.div(({}) => ({
  position: 'absolute',
  background: 'linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)',
  width: '100%',
  height: 70,
  zIndex: -1,
  '@media screen and (max-width: 760px)': {
    height: 45
  }
}));
export const StyledSideBar = styled(Sidebar)(({}) => ({
  '.p-component-overlay-enter': {
    animation: 'none'
  },
  backgroundColor: '#FFFFFF',
  position: 'fixed',
  top: 0,
  width: 250,
  height: '100%',
  minHeight: '100vh',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  boxSizing: 'content-box',
  zIndex: 10,
  '@media screen and (max-width: 760px)': {
    width: 200
  },
  '.p-sidebar-header': {
    padding: 0
  },
  '.p-sidebar-content': {
    padding: 0,
    boxSizing: 'content-box'
  }
}));
export const StyledElementImg = styled.svg(({}) => ({
  width: 130,
  position: 'absolute',
  marginLeft: 45,
  '@media screen and (max-width: 760px)': {
    width: 80,
    marginLeft: 55
  }
}));
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})(({}) => ({
  color: '#495057',
  textDecoration: 'none'
}));
export const SideBarContainer = styled.ul(({}) => ({
  paddingTop: 100,
  cursor: 'pointer',
  listStyle: 'none',
  paddingLeft: 0,
  '.active': {
    'div, li': {
      color: 'white',
      background: 'linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)'
    }
  },
  '.active:active': {
    div: {
      boxShadow: ' 0px 0px 0px 3.8px #BBDEFB, 0px 0px 0px -2.8px #BBDEFB'
    }
  },
  '@media screen and (max-width: 760px)': {
    paddingTop: 85
  }
}));
export const SideBarBlock = styled.li(({}) => ({
  color: '#464646',
  border: '1px solid rgba(122, 200, 236, 0.2)',
  paddingLeft: 90,
  paddingTop: 20,
  paddingBottom: 20,
  margin: 0,
  '@media screen and (max-width: 760px)': {
    height: 40,
    fontSize: 14,
    paddingTop: 13,
    paddingLeft: 70
  }
}));
export const StyledButton = styled.button(({}) => ({
  width: 250,
  height: 60,
  border: '1px solid rgba(122, 200, 236, 0.2)',
  backgroundColor: 'white',
  color: '#464646',
  fontSize: 15,
  cursor: 'pointer',
  '@media screen and (max-width: 760px)': {
    height: 40,
    fontSize: 14,
    paddingTop: 13,
    paddingRight: 70
  }
}));
