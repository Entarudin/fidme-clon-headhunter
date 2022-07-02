import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import { Knob } from 'primereact/knob';
export const StyledIcon = styled(EditIcon)(({}) => ({
  size: 'large',
  color: 'white'
}));
export const StyledKnob = styled(Knob)(({}) => ({
  '@media screen and (max-width: 550px)': {
    marginTop: 10
  }
}));
export const StyledHeader = styled.div(({}) => ({
  display: 'flex',
  marginLeft: 235,
  '@media screen and (max-width: 1024px)': {
    marginLeft: 205
  },
  '@media screen and (max-width: 760px)': {
    marginLeft: 135
  },
  '@media screen and (max-width: 550px)': {
    marginLeft: 70
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 70
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
export const StyledBlock = styled.div(({}) => ({
  width: 230,
  height: 70,
  paddingTop: 10,
  textAlign: 'center',
  borderRadius: 10,
  background: 'linear-gradient(277.48deg, #0096DC 7.22%, rgba(62, 194, 255, 0.6) 99%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  '@media screen and (max-width: 1024px)': {
    width: 200,
    height: 70,
    paddingTop: 10
  },
  '@media screen and (max-width: 760px)': {
    width: 165,
    height: 60,
    paddingTop: 5
  },
  '@media screen and (max-width: 550px)': {
    width: 135,
    height: 50,
    marginTop: 10
  },
  '@media screen and (max-width: 400px)': {
    width: 185,
    height: 50,
    paddingTop: 5
  }
}));
export const StyledP = styled.p(({}) => ({
  fontWeight: 600,
  fontSize: 16,
  color: 'white',
  '@media screen and (max-width: 550px)': {
    fontSize: 12
  }
}));
export const StyledLinkButton = styled.button(({}) => ({
  height: 60,
  width: 60,
  border: 'none',
  background: 'linear-gradient(277.48deg, #0096DC 7.22%, rgba(62, 194, 255, 0.6) 99%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  marginTop: 100,
  marginLeft: 180,
  cursor: 'pointer',
  '@media screen and (max-width: 1024px)': {
    marginLeft: 150,
    height: 50,
    marginTop: 80,
    width: 50
  },
  '@media screen and (max-width: 760px)': {
    marginLeft: 80,
    height: 50,
    marginTop: 50,
    width: 50
  },
  '@media screen and (max-width: 550px)': {
    marginLeft: 30,
    height: 40,
    marginTop: 30,
    width: 40
  },
  '@media screen and (max-width: 400px)': {
    marginLeft: 20,
    height: 40,
    marginTop: 20,
    width: 40
  }
}));
export const StyledVacansyButton = styled.button(({}) => ({
  height: 60,
  width: 400,
  border: 'none',
  background: 'linear-gradient(277.48deg, #0096DC 7.22%, rgba(62, 194, 255, 0.6) 99%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: 10,
  cursor: 'pointer',
  marginLeft: 30,
  '@media screen and (max-width: 1024px)': {
    height: 50,
    width: 300,
    marginLeft: 0
  },
  '@media screen and (max-width: 550px)': {
    height: 40,
    width: 200
  }
}));
export const StyledCompanyInfo = styled.div(({}) => ({
  background: '#FFFFFF',
  border: '1px solid #0097DC',
  boxSizing: 'border-box',
  borderRadius: 20,
  width: 650,
  marginBottom: 30,
  marginTop: 30
}));
export const StyledCompanyData = styled.div(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: 500,
  minHeight: 300,
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
export const StyledСompanyP = styled.p(({}) => ({
  fontSize: 16,
  marginLeft: 30,
  marginRight: 30,
  '@media screen and (max-width: 550px)': {
    fontSize: 12
  }
}));
