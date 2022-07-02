import styled from 'styled-components';
import '../../../index.css';
import background from '../../../assets/images/ellipsesInfo2.png';

export const Background = styled.div(({}) => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 10,
  top: '-23%',
  '@media screen and (max-width: 799px)': {
    display: 'none'
  }
}));
export const InfoHolder = styled.div(({}) => ({
  marginLeft: 100,
  paddingBottom: 13,
  paddingTop: 255,
  '@media screen and (max-width: 1300px)': {
    paddingTop: 80
  },
  '@media screen and (max-width: 1024px)': {
    paddingTop: 105
  },
  '@media screen and (max-width: 950px)': {
    marginLeft: 50
  }
}));

export const FirstInfoHolder = styled.div(({}) => ({
  display: 'flex',
  color: 'white',
  fontSize: 35,
  marginLeft: 100,
  '@media screen and (max-width: 1300px)': {
    fontSize: 30,
    marginLeft: 60,
    paddingTop: 40
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 26,
    marginLeft: 60,
    paddingTop: 20
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 24
  },
  '@media screen and (max-width: 900px)': {
    marginLeft: 10
  }
}));

export const SecondInfoHolder = styled.div(({}) => ({
  display: 'flex',
  color: 'white',
  fontSize: 35,
  paddingTop: 80,
  marginLeft: 180,
  '@media screen and (max-width: 1300px)': {
    fontSize: 30,
    marginLeft: 120,
    paddingTop: 40
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 26,
    marginLeft: 120,
    paddingTop: 20
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 24
  },
  '@media screen and (max-width: 900px)': {
    marginLeft: 70,
    paddingTop: 0
  }
}));
export const ThirdInfoHolder = styled.div(({}) => ({
  display: 'flex',
  color: 'white',
  fontSize: 35,
  paddingTop: 80,
  marginLeft: 260,
  '@media screen and (max-width: 1300px)': {
    fontSize: 30,
    marginLeft: 180,
    paddingTop: 40
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 26,
    paddingTop: 20
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 24
  },
  '@media screen and (max-width: 900px)': {
    marginLeft: 110
  }
}));
export const FourInfoHolder = styled.div(({}) => ({
  display: 'flex',
  color: 'white',
  fontSize: 35,
  paddingTop: 80,
  marginLeft: 340,
  '@media screen and (max-width: 1300px)': {
    fontSize: 30,
    marginLeft: 240,
    paddingTop: 45
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 26,
    marginLeft: 240,
    paddingTop: 20
  },
  '@media screen and (max-width: 1024px)': {
    fontSize: 24
  },
  '@media screen and (max-width: 900px)': {
    marginLeft: 170
  }
}));

export const Images = styled.img(({}) => ({
  height: 100,
  marginRight: 30,
  '@media screen and (max-width: 1024px)': {
    height: 80,
    marginRight: 15
  }
}));
