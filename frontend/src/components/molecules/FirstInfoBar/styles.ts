import styled from 'styled-components';
import '../../../index.css';
import background from '../../../assets/images/info1.png';
import ellipses1 from '../../../assets/images/ellipsesInfo1.png';

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

export const Background = styled.div(({}) => ({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  height: 1400,
  backgroundPosition: 'right',
  marginRight: 200,
  '@media screen and (max-width: 1400px)': {
    marginRight: 120
  },
  '@media screen and (max-width: 1200px)': {
    marginRight: 70
  },
  '@media screen and (max-width: 1024px)': {
    marginRight: 50
  },
  '@media screen and (max-width: 890px)': {
    marginTop: 400,
    height: 1250,
    marginRight: 0
  },
  '@media screen and (max-width: 800px)': {
    height: 1030,
    marginTop: 500
  }
}));

export const FirstTextStyle = styled.p(({}) => ({
  color: 'white',
  fontSize: 35,
  paddingTop: 385,
  textAlign: 'right',
  marginRight: 140,
  '@media screen and (max-width: 1400px)': {
    fontSize: 31
  },
  '@media screen and (max-width: 1210px)': {
    fontSize: 26,
    marginRight: 130,
    paddingTop: 395
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 24,
    marginRight: 130
  },
  '@media screen and (max-width: 890px)': {
    fontSize: 24,
    marginRight: 120,
    paddingTop: 320
  },
  '@media screen and (max-width: 800px)': {
    paddingTop: 200
  }
}));

export const SecondTextStyle = styled.p(({}) => ({
  color: 'white',
  fontSize: 35,
  textAlign: 'right',
  marginRight: 310,
  marginTop: 245,
  '@media screen and (max-width: 1400px)': {
    fontSize: 31,
    marginTop: 230
  },
  '@media screen and (max-width: 1210px)': {
    fontSize: 26,
    marginRight: 300,
    marginTop: 235
  },
  '@media screen and (max-width: 1060px)': {
    fontSize: 24,
    marginRight: 300,
    marginTop: 240
  }
}));

export const ThirdTextStyle = styled.p(({}) => ({
  color: 'white',
  fontSize: 35,
  marginTop: 220,
  textAlign: 'right',
  marginRight: 150,
  '@media screen and (max-width: 1400px)': {
    fontSize: 31,
    marginTop: 215
  },
  '@media screen and (max-width: 1210px)': {
    fontSize: 26,
    marginRight: 120,
    marginTop: 225
  },
  '@media screen and (max-width: 1024px)': {
    marginTop: 230,
    fontSize: 24
  }
}));
