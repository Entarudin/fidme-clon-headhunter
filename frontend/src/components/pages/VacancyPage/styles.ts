import styled from 'styled-components';

export const StyledVacancyInfo = styled.div(({}) => ({
  background: '#FFFFFF',
  border: '1px solid #0097DC',
  boxSizing: 'border-box',
  borderRadius: 20,
  width: 650,
  marginBottom: 30,
  marginTop: 30
}));

export const StyledP = styled.p(({}) => ({
  fontSize: 16,
  marginLeft: 30,
  marginRight: 30,
  '@media screen and (max-width: 550px)': {
    fontSize: 12
  }
}));

export const StyledPColored = styled.p(({}) => ({
  fontSize: 16,
  marginLeft: 30,
  marginRight: 30,
  color: '#047FB8',
  fontWeight: 600,
  '@media screen and (max-width: 550px)': {
    fontSize: 12
  }
}));

export const StyledData = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: 500,
  height: 300,
  justifyContent: 'space-around',
  marginLeft: 310,
  marginTop: 30,
  '@media screen and (max-width: 1024px)': {
    width: 450,
    height: 300,
    marginLeft: 235,
    marginTop: 20
  },
  '@media screen and (max-width: 760px)': {
    width: 365,
    height: 280,
    marginLeft: 165,
    marginTop: 20
  },
  '@media screen and (max-width: 550px)': {
    width: 285,
    height: 240,
    marginLeft: 105,
    marginTop: 10
  },
  '@media screen and (max-width: 400px)': {
    width: 255,
    height: 240,
    marginLeft: 70
  }
}));
