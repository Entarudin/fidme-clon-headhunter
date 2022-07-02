import styled from 'styled-components';

export const StyledP = styled.p(({}) => ({
  fontWeight: 600,
  fontSize: 16,
  color: 'white',
  '@media screen and (max-width: 550px)': {
    fontSize: 12
  }
}));

export const ButtonConteiner = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const StyledVacansyButton = styled.button(({}) => ({
  height: 60,
  width: 400,
  border: 'none',
  background: 'linear-gradient(277.48deg, #0096DC 7.22%, rgba(62, 194, 255, 0.6) 99%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  cursor: 'pointer',
  marginTop: 20,
  '@media screen and (max-width: 1024px)': {
    height: 50,
    width: 300
  },
  '@media screen and (max-width: 760px)': {
    marginTop: 0
  },
  '@media screen and (max-width: 550px)': {
    height: 40,
    width: 200,
    marginTop: 0
  },
  '@media screen and (max-width: 400px)': {
    height: 40,
    width: 200,
    marginLeft: '20%'
  },
  '@media screen and (max-width: 320px)': {
    height: 40,
    width: 200,
    marginLeft: '5%'
  }
}));

export const StyledHeaderCompanies = styled.div(({}) => ({
  fontWeight: 400,
  fontSize: 35,
  color: '#000000',
  marginLeft: '8%',
  '@media screen and (max-width: 1024px)': {
    marginLeft: '20%'
  },
  '@media screen and (max-width: 900px)': {
    marginLeft: '10%'
  },
  '@media screen and (max-width: 800px)': {
    marginLeft: '5%',
    fontSize: 30
  },
  '@media screen and (max-width: 760px)': {
    marginLeft: '15%',
    marginBottom: 20
  },
  '@media screen and (max-width: 650px)': {
    marginLeft: '7%',
    fontSize: 20
  },
  '@media screen and (max-width: 450px)': {
    marginLeft: '10%',
    fontSize: 15
  }
}));

export const StyledCompaniesBlock = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginLeft: 100,
  marginTop: 60,
  gap: 70,
  '@media screen and (max-width: 1024px)': {
    marginLeft: 100,
    gap: 70
  },
  '@media screen and (max-width: 760px)': {
    marginTop: 0,
    marginLeft: 0,
    gap: 50
  },
  '@media screen and (max-width: 550px)': {
    marginTop: 0,
    marginLeft: '50%',
    flexDirection: 'column'
  },
  '@media screen and (max-width: 400px)': {
    marginTop: 0,
    marginLeft: '30%'
  },
  '@media screen and (max-width: 320px)': {
    marginTop: 0,
    marginLeft: '20%'
  }
}));
