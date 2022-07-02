import styled from 'styled-components';
import backgroundMain from '../../../assets/images/ellipsesMain.png';

export const Footer = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  '@media screen and (max-width: 1400px)': {
    height: 180
  },
  '@media screen and (max-width: 1250px)': {
    height: 100
  },
  '@media screen and (max-width: 1024px)': {
    height: 100
  },
  '@media screen and (max-width: 860px)': {
    height: 50
  },
  '@media screen and (max-width: 550px)': {
    display: 'none'
  }
}));

export const Wrapper = styled.div(({}) => ({
  backgroundImage: `url(${backgroundMain})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: '100%'
}));

export const NavBar = styled.ul(({}) => ({
  height: 30,
  marginTop: 45,
  display: 'flex',
  listStyleType: 'none',
  fontSize: 22,
  justifyContent: 'space-between',
  width: 600,
  color: '#FFFFFF',
  marginLeft: 150,
  paddingInlineStart: 0,
  '@media screen and (max-width: 1400px)': {
    marginLeft: 90
  },
  '@media screen and (max-width: 1024px)': {
    marginLeft: 70
  },
  '@media screen and (max-width: 920px)': {
    marginLeft: 50
  },
  '@media screen and (max-width: 720px)': {
    fontSize: 18
  },
  '@media screen and (max-width: 600px)': {
    marginRight: 50,
    marginTop: 25
  }
}));

export const Logo = styled.svg(({}) => ({
  width: 360,
  height: 190,
  marginTop: 30,
  marginRight: 150,
  '@media screen and (max-width: 1450px)': {
    marginRight: 70
  },
  '@media screen and (max-width: 1250px)': {
    marginRight: 40
  },
  '@media screen and (max-width: 1024px)': {
    marginRight: 0
  },
  '@media screen and (max-width: 760px)': {
    marginTop: 0
  },
  '@media screen and (max-width: 600px)': {
    display: 'none'
  }
}));

export const FindMeBar = styled.div(({}) => ({
  width: '65%',
  fontSize: 168,
  color: '#FFFFFF',
  marginLeft: 170,
  fontFamily: 'Open Sans',
  '@media screen and (max-width: 1400px)': {
    fontSize: 130
  },
  '@media screen and (max-width: 1250px)': {
    marginLeft: 100
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 100,
    marginLeft: 90
  },
  '@media screen and (max-width: 920px)': {
    marginLeft: 50,
    fontSize: 90
  },
  '@media screen and (max-width: 715px)': {
    height: 135
  },
  '@media screen and (max-width: 600px)': {
    fontSize: 75
  },
  '@media screen and (max-width: 500px)': {
    fontSize: 65,
    height: 110,
    marginLeft: 30
  },
  '@media screen and (max-width: 395px)': {
    height: 80
  },
  '@media screen and (max-width: 365px)': {
    fontSize: 55
  },
  '@media screen and (max-width: 350px)': {
    marginLeft: 10
  }
}));

export const FindMeText = styled.div(({}) => ({
  fontSize: 28,
  marginLeft: 170,
  color: '#FFFFFF',
  width: 600,
  '@media screen and (max-width: 1250px)': {
    marginLeft: 100
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 26,
    marginLeft: 100
  },
  '@media screen and (max-width: 920px)': {
    marginLeft: 50,
    fontSize: 24
  },
  '@media screen and (max-width: 770px)': {
    fontSize: 22
  },
  '@media screen and (max-width: 730px)': {
    fontSize: 20
  },
  '@media screen and (max-width: 670px)': {
    fontSize: 18,
    width: '65%'
  },
  '@media screen and (max-width: 630px)': {
    marginLeft: 25
  },
  '@media screen and (max-width: 600px)': {
    display: 'none'
  }
}));

export const FindMeHolder = styled.div(({}) => ({
  justifyContent: 'left',
  display: 'wrap'
}));

export const FindMeButton = styled.button(({}) => ({
  backgroundColor: '#7AC8EC',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
  width: 320,
  height: 80,
  marginLeft: 300,
  fontSize: 25,
  marginTop: 50,
  marginBottom: 45,
  '@media screen and (max-width: 1450px)': {
    marginLeft: 260,
    height: 70,
    width: 300
  },
  '@media screen and (max-width: 1250px)': {
    marginLeft: 200,
    width: 270
  },
  '@media screen and (max-width: 1024px)': {
    marginLeft: 160,
    width: 250
  },
  '@media screen and (max-width: 920px)': {
    width: 200,
    marginTop: 30
  },
  '@media screen and (max-width: 745px)': {
    marginTop: 15
  },
  '@media screen and (max-width: 670px)': {
    marginLeft: 120,
    height: 60
  },
  '@media screen and (max-width: 630px)': {
    marginLeft: 80
  },
  '@media screen and (max-width: 600px)': {
    width: 175
  },
  '@media screen and (max-width: 500px)': {
    marginLeft: 50
  },
  '@media screen and (max-width: 365px)': {
    marginLeft: 10,
    marginTop: 5
  }
}));

export const PlusBarText = styled.p(({}) => ({
  fontSize: 48,
  textAlign: 'center',
  marginTop: 400,
  '@media screen and (max-width: 1400px)': {
    marginTop: 160
  },
  '@media screen and (max-width: 1024px)': {
    marginTop: 100,
    fontSize: 40
  },
  '@media screen and (max-width: 900px)': {
    marginTop: 50
  },
  '@media screen and (max-width: 550px)': {
    fontSize: 35
  },
  '@media screen and (max-width: 370px)': {
    fontSize: 30
  }
}));
