import styled from 'styled-components';
import { Select } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { TextField } from '@mui/material';
export const StyledTextField = styled(TextField)(({}) => ({
  width: 250,
  '@media screen and (max-width: 760px)': {
    width: 300
  },
  '@media screen and (max-width: 550px)': {
    width: 250
  }
}));
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})(({}) => ({
  color: '#495057',
  textDecoration: 'none'
}));
export const StyledResumeForm = styled.div(({}) => ({
  marginLeft: 80,
  '@media screen and (max-width: 760px)': {
    marginLeft: 150
  },
  '@media screen and (max-width: 550px)': {
    marginLeft: 80
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 40
  }
}));
export const StyledSelect = styled(Select)(({}) => ({
  width: 200
}));

export const StyledDiv = styled.div(({}) => ({
  display: 'flex',
  '@media screen and (max-width: 760px)': {
    display: 'block'
  }
}));
export const StyledDi = styled.div(({}) => ({
  marginTop: 20
}));
export const StyledD = styled.div(({}) => ({
  marginRight: 50
}));
export const StyledInput = styled.input(({}) => ({
  display: 'none'
}));
export const StyledLabel = styled.label(({}) => ({
  background: '#1976d2',
  width: 200,
  height: 60,
  paddingBottom: 10,
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 10,
  borderRadius: 5,
  color: 'white'
}));
export const StyledDivButton = styled.div(({}) => ({
  width: 300,
  marginLeft: 80,
  marginTop: 30,
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 50,
  '@media screen and (max-width: 760px)': {
    width: 270,
    marginLeft: 160
  },
  '@media screen and (max-width: 550px)': {
    marginLeft: 70
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 30
  }
}));
export const StyledTitle = styled.p(({}) => ({
  fontSize: 20,
  marginTop: 30,
  marginBottom: 30,
  '@media screen and (max-width: 760px)': {
    marginTop: 0
  },
  '@media screen and (max-width: 550px)': {
    marginTop: 0
  }
}));
