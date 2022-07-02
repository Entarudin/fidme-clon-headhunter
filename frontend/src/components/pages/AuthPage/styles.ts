import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthPage = styled.div(({}) => ({
  background: 'linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}));

export const AuthButton = styled.button(({}) => ({
  backgroundColor: '#4F4F4F',
  color: '#FFFFFF',
  width: 250,
  height: 60,
  fontSize: 20,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  marginTop: 20,
  marginLeft: 105,
  marginBottom: 10,
  cursor: 'pointer',
  '@media screen and (max-width: 760px)': {
    width: 200,
    height: 50,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 75,
    marginBottom: 10
  },
  '@media screen and (max-width: 400px)': {
    width: 150,
    height: 40,
    fontSize: 16,
    marginTop: 20,
    marginLeft: 66,
    marginBottom: 10
  }
}));

export const AuthInput = styled.input(({}) => ({
  width: 330,
  height: 55,
  borderRadius: 15,
  borderWidth: 1,
  marginTop: 20,
  fontSize: 'inherit',
  paddingLeft: 10,
  paddingRight: 10,
  marginLeft: 55,
  '@media screen and (max-width: 760px)': {
    width: 250,
    height: 45,
    marginTop: 15,
    fontSize: 'inherit',
    marginLeft: 40
  },
  '@media screen and (max-width: 400px)': {
    width: 200,
    height: 35,
    marginTop: 15,
    marginLeft: 30
  }
}));
export const BaseBlock = styled.div(({}) => ({
  backgroundColor: 'white',
  width: 470,
  borderRadius: 20,
  marginTop: '10%',
  marginLeft: '30%',
  paddingBottom: 25,
  '@media screen and (min-width: 1300px)': {
    position: 'absolute',
    top: '10%',
    right: 0,
    left: 0,
    margin: 'auto'
  },
  '@media screen and (max-width: 1300px)': {
    position: 'absolute',
    top: '10%',
    right: 0,
    left: 0,
    margin: 'auto'
  },
  '@media screen and (max-width: 760px)': {
    width: 350,
    borderRadius: 20,
    position: 'absolute',
    top: '10%',
    right: 0,
    left: 0,
    margin: 'auto'
  },
  '@media screen and (max-width: 400px)': {
    width: 280,
    borderRadius: 20,
    position: 'absolute',
    top: '10%',
    right: 0,
    left: 0,
    margin: 'auto'
  }
}));

export const StyleElementImg = styled.svg(({}) => ({
  marginLeft: 130,
  marginTop: 25,
  '@media screen and (max-width: 1300px)': {
    width: '30%',
    marginLeft: 150,
    marginTop: 10
  },
  '@media screen and (max-width: 760px)': {
    width: '40%',
    marginLeft: 90,
    marginTop: 10
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 70,
    marginTop: 10,
    width: '40%'
  }
}));

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})(({}) => ({
  color: '#495057',
  textDecoration: 'none',
  marginLeft: 160,
  '@media screen and (max-width: 760px)': {
    marginLeft: 100
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 68
  }
}));
