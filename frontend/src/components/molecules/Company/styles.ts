import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCompany = styled.div(({}) => ({
  width: 225,
  height: 250,
  background: '#FFFFFF',
  border: '1px solid #5AB7E2',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  '.name_company': {
    marginLeft: 45,
    fontWeight: 400,
    fontSize: 25,
    color: '#464646'
  }
}));

export const StyledLogoCompany = styled.img(({}) => ({
  display: 'block',
  width: 152,
  height: 150,
  margin: 25
}));

export const StyledNavLink = styled(NavLink)(({}) => ({
  textDecoration: 'none'
}));
