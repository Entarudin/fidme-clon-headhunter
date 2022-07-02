import styled from 'styled-components';
export const PageContainer = styled.div(({}) => ({
  position: 'absolute',
  marginLeft: 250,
  marginTop: 70,
  zIndex: 0,
  '@media screen and (max-width: 1024px)': {
    marginLeft: '0%'
  },
  '@media screen and (max-width: 760px)': {
    marginLeft: 0
  },
  '@media screen and (max-width: px)': {
    marginLeft: 0
  }
}));
