import styled from 'styled-components';
import '../../../index.css';
import backgroundMain from '../../../assets/images/ellipsesMain.png';
import ellipses1 from '../../../assets/images/ellipsesInfo1.png';

export const MainPageStyle = styled.div(({}) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white'
}));

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

export const BackgroundInfoFirstPart = styled.div(({}) => ({
  backgroundImage: `url(${ellipses1})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  marginTop: 400,
  position: 'relative',
  zIndex: 1,
  '@media screen and (max-width: 1400px)': {
    marginTop: 330
  },
  '@media screen and (max-width: 1024px)': {
    marginTop: 350
  },
  '@media screen and (max-width: 799px)': {
    display: 'none'
  }
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

export const PlusBarHolder = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  position: 'absolute',
  width: '100%',
  zIndex: 10
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
