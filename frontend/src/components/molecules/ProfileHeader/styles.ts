import styled from 'styled-components';
import { Avatar } from 'primereact/avatar';
export const StyledAvatar = styled(Avatar)(({}) => ({
  minHeight: 130,
  minWidth: 130,
  marginLeft: 5,
  marginTop: 5,

  '@media screen and (max-width: 1024px)': {
    minHeight: 70,
    minWidth: 70,
    marginLeft: 5,
    marginTop: 5
  },
  '@media screen and (max-width: 760px)': {
    minHeight: 70,
    minWidth: 70,
    marginLeft: 5,
    marginTop: 5
  },
  '@media screen and (max-width: 550px)': {
    minHeight: 50,
    minWidth: 50,
    marginLeft: 3,
    marginTop: 3
  },
  '@media screen and (max-width: 400px)': {
    minHeight: 50,
    minWidth: 50,
    marginLeft: 0,
    marginTop: 1
  }
}));
export const StyledProfileHeader = styled.div(({}) => ({
  width: 530,
  height: 150,
  background: 'linear-gradient(277.48deg, #0096DC 7.22%, rgba(62, 194, 255, 0.51) 99%)',
  display: 'flex',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  marginLeft: 55,
  marginTop: 50,
  '@media screen and (max-width: 1024px)': {
    width: 430,
    height: 120,
    marginLeft: 40,
    marginTop: 30
  },
  '@media screen and (max-width: 760px)': {
    width: 350,
    height: 100
  },
  '@media screen and (max-width: 550px)': {
    width: 300,
    height: 80,
    marginLeft: 30,
    marginTop: 10
  },
  '@media screen and (max-width: 400px)': {
    width: 250,
    height: 70,
    marginLeft: 10,
    marginTop: 5
  }
}));
export const StyledCircle = styled.div(({}) => ({
  width: 140,
  height: 140,
  background:
    'linear-gradient(311.31deg, #00A1EB -6.39%, rgba(87, 202, 255, 0.85) 59.1%, rgba(87, 202, 255, 0.85) 112.23%)',
  borderRadius: 200,
  marginLeft: 25,
  marginRight: 30,
  marginTop: 5,
  '@media screen and (max-width: 1024px)': {
    width: 80,
    height: 80,
    marginTop: 20
  },
  '@media screen and (max-width: 760px)': {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 5
  },
  '@media screen and (max-width: 550px)': {
    width: 70,
    height: 70,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 5
  },
  '@media screen and (max-width: 400px)': {
    width: 65,
    height: 65,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 3
  }
}));
export const StyledP = styled.p(({}) => ({
  fontWeight: 600,
  fontSize: 16,
  color: 'white',
  marginTop: 35,
  '@media screen and (max-width: 1024px)': {
    marginTop: 25
  },
  '@media screen and (max-width: 760px)': {
    fontSize: 14,
    marginTop: 22,
    marginLeft: 10
  },
  '@media screen and (max-width: 550px)': {
    fontSize: 12,
    marginTop: 15,
    marginLeft: 10
  },
  '@media screen and (max-width: 400px)': {
    marginTop: 13,
    marginLeft: 10,
    marginBottom: 5
  }
}));
export const StyledProf = styled.p(({}) => ({
  fontWeight: 600,
  fontSize: 16,
  color: 'white',
  marginTop: 15,
  '@media screen and (max-width: 1024px)': {
    fontSize: 16,
    marginTop: 10
  },
  '@media screen and (max-width: 760px)': {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10
  },

  '@media screen and (max-width: 550px)': {
    fontSize: 12,
    marginTop: 0,
    marginLeft: 10
  },
  '@media screen and (max-width: 400px)': {}
}));
export const StyledHr = styled.hr(({}) => ({
  border: '2px solid #FFFFFF',
  width: 300,
  '@media screen and (max-width: 1024px)': {
    border: '1px solid #FFFFFF',
    width: 250
  },
  '@media screen and (max-width: 760px)': {
    border: '1px solid #FFFFFF',
    width: 200,
    marginLeft: 10
  },
  '@media screen and (max-width: 550px)': {
    border: '0.5px solid #FFFFFF',
    width: 100,
    marginLeft: 10
  },
  '@media screen and (max-width: 400px)': {}
}));
