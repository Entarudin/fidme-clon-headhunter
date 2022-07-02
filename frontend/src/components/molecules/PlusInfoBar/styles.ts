import styled from 'styled-components';

export const PlusBarHolder = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  position: 'absolute',
  width: '100%',
  zIndex: 10
}));

export const PlusBarContainer = styled.div(({}) => ({
  height: 600,
  backgroundColor: '#7AC8EC',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);',
  justifyContent: 'space-around',
  display: 'flex',
  width: '100%',
  '@media screen and (max-width: 730px)': {
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto'
  }
}));

export const FirstPlusBarItem = styled.div(({}) => ({
  backgroundColor: 'white',
  height: 510,
  width: 450,
  marginTop: 50,
  marginLeft: 20,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 1450px)': {
    width: '30%'
  },
  '@media screen and (max-width: 730px)': {
    width: '75%',
    marginLeft: 0,
    height: 350
  }
}));

export const SecondPlusBarItem = styled.div(({}) => ({
  backgroundColor: 'white',
  height: 510,
  width: 450,
  marginTop: 50,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 1450px)': {
    width: '30%'
  },
  '@media screen and (max-width: 730px)': {
    width: '75%',
    height: 370
  }
}));

export const ThirdPlusBarItem = styled.div(({}) => ({
  backgroundColor: 'white',
  height: 510,
  width: 450,
  marginTop: 50,
  marginRight: 20,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 1450px)': {
    width: '30%'
  },
  '@media screen and (max-width: 730px)': {
    width: '75%',
    marginRight: 0,
    height: 350
  }
}));

export const PlusBarItemText = styled.p(({}) => ({
  fontSize: 26,
  textAlign: 'center',
  '@media screen and (max-width: 1450px)': {
    fontSize: 24
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 22
  }
}));

export const Image = styled.img(({}) => ({
  '@media screen and (max-width: 1000px)': {
    width: 250
  }
}));
