import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledVacancy = styled.div(({}) => ({
  width: 850,
  height: 150,
  marginBottom: 15,
  display: 'flex',
  background: '#FFFFFF',
  border: '1px solid #5AB7E2',
  boxSizing: 'border-box',
  '@media screen and (max-width: 1200px)': {
    width: 680
  },
  '@media screen and (max-width: 760px)': {
    width: 525
  },
  '@media screen and (max-width: 600px)': {
    width: 400,
    height: 120
  },
  '@media screen and (max-width: 450px)': {
    width: 300,
    height: 100
  },
  '@media screen and (max-width: 350px)': {
    width: 250,
    height: 100
  }
}));

export const StyledLogoCompany = styled.img(({}) => ({
  display: 'block',
  width: 109,
  height: 109,
  marginTop: 15,
  padding: 20,
  '@media screen and (max-width: 600px)': {
    width: 80,
    height: 80,
    padding: 10
  },
  '@media screen and (max-width: 450px)': {
    width: 65,
    height: 65,
    padding: 10
  }
}));

export const StyledInfoBlock = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 15,
  marginLeft: 10,
  '.title': {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 22,
    color: '#000000'
  },
  '.type_vacancy': {
    marginTop: 12,
    width: 191,
    height: 31,
    background: '#7CC6E8',
    borderRadius: 30,
    p: {
      textAlign: 'center',
      marginTop: 6,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 13,
      color: '#FFFFFF'
    }
  },
  '.skills': {
    marginTop: 15,
    height: 16,
    width: 400,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    color: '#000000',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '@media screen and (max-width: 760px)': {
    '.title': {
      fontSize: 15
    },
    '.type_vacancy': {
      width: 140,
      p: {
        marginTop: 8,
        fontSize: 11
      }
    },
    '.skills': {
      width: 300,
      fontSize: 14
    },
    '@media screen and (max-width: 600px)': {
      '.title': {
        fontSize: 12
      },
      '.type_vacancy': {
        width: 100,
        p: {
          marginTop: 8,
          fontSize: 9
        }
      },
      '.skills': {
        width: 200,
        fontSize: 11
      }
    },
    '@media screen and (max-width: 450px)': {
      '.title': {
        fontSize: 12
      },
      '.type_vacancy': {
        width: 100,
        p: {
          marginTop: 8,
          fontSize: 9
        }
      },
      '.skills': {
        display: 'none'
      }
    },
    '@media screen and (max-width: 350px)': {
      '.title': {
        fontSize: 9,
        marginLeft: 5
      },
      '.type_vacancy': {
        width: 70,
        height: 28,
        marginTop: 20,
        p: {
          marginTop: 9,
          fontSize: 7
        }
      },
      '.skills': {
        display: 'none'
      }
    }
  }
}));

export const StyledIconsBlock = styled.div(({}) => ({
  display: 'flex',
  marginLeft: '20%',
  marginTop: 12,
  '@media screen and (max-width: 1200px)': {
    marginLeft: 0
  },
  '@media screen and (max-width: 1024px)': {
    marginLeft: 0
  },
  '@media screen and (max-width: 760px)': {
    marginLeft: 0
  },
  '@media screen and (max-width: 450px)': {
    marginLeft: 20
  },
  '@media screen and (max-width: 350px)': {
    marginLeft: 15
  }
}));

export const StyledIcon = styled.img(({}) => ({
  width: 25,
  height: 25,
  marginLeft: 20,
  '@media screen and (max-width: 760px)': {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  '@media screen and (max-width: 450px)': {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  '@media screen and (max-width: 350px)': {
    width: 15,
    height: 15,
    marginLeft: 5
  }
}));

export const StyledNavLink = styled(NavLink)(({}) => ({
  textDecoration: 'none'
}));
