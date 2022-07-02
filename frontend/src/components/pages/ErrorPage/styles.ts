import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div(({}) => ({
  background: 'linear-gradient(355deg,#07C2EB 0.29%,#0984DE 100%)',
  position: 'fixed',
  left: '0px',
  top: 0,
  width: '100%',
  height: '100%',
  lineHeight: '1.5em',
  zIndex: 9999
}));

export const ErrorText = styled.div(({}) => ({
  fontSize: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: '"Shabnam", Tahoma, sans-serif',
  color: '#000',
  direction: 'rtl',
  img: {
    margin: ' 0px auto 20px',
    height: '300px'
  },
  span: {
    position: 'relative',
    fontSize: '2.3em',
    fontWeight: 900,
    marginBottom: '20px'
  },
  p: {
    '&.p-a': {
      fontSize: '19px',
      margin: ' 30px 0 15px 0'
    },
    '&.p-b': {
      fontSize: '15px'
    }
  },
  '.back': {
    background: '#fff',
    color: '#000',
    fontSize: '30px',
    textDecoration: 'none',
    margin: '1em auto 0',
    padding: '.7em 2em',
    borderRadius: '500px',
    boxShadow: '0 20px 70px 4px rgb(0 0 0 / 10%), inset 7px 33px 0 0px #07ade0',
    fontWeight: 900,
    transition: 'all 300ms ease',
    '&:hover': {
      transform: 'translateY(-13px)',
      boxShadow: '0 35px 90px 4px rgba(0,0,0, .3), inset 0px 0 0 3px #000'
    }
  }
}));

export const StyledLink = styled(Link)(({}) => ({
  textDecoration: 'none',
  '&:focus,  &:hover,  &:visited,  &:link,  &:active ': {
    textDecoration: 'none'
  }
}));
