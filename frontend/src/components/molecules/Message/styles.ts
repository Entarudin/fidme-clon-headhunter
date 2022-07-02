import styled from 'styled-components';

export const StyledMessage = styled.div(({}) => ({
  '.message': {
    display: 'flex',
    marginTop: 20,
    flexFlow: 'wrap',
    flexDirection: 'column'
  },

  '.messageTop': {
    display: 'flex'
  },

  '.messageImg': {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover',
    marginTop: 10,
    marginRight: 15
  },

  '.messageText': {
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    background: '#3D9AC5',
    color: '#FFFFFF',
    maxWidth: 235,
    wordWrap: 'break-word'
  },

  '.messageBottom': {
    fontSize: 10,
    fontFamily: 'Palanquin',
    color: '#979797',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -15
  },

  '.message.own': {
    alignItems: 'flex-end'
  },

  '.message.own .messageText': {
    backgroundColor: 'rgb(245, 241, 241)',
    color: 'black'
  },

  '@media screen and (max-width: 550px)': {
    '.messageImg': {
      width: 30,
      height: 30,
      marginTop: 10,
      marginRight: 10
    },
    '.messageText': {
      padding: 10,
      fontSize: 10,
      maxWidth: 135
    },
    '.messageBottom': {
      fontSize: 8,
      marginTop: -12
    }
  },
  '@media screen and (max-width: 370px)': {
    '.messageImg': {
      width: 25,
      height: 25,
      marginTop: 10,
      marginRight: 5
    },
    '.messageText': {
      padding: 8,
      fontSize: 9,
      maxWidth: 100
    },
    '.messageBottom': {
      fontSize: 8,
      marginTop: -12
    }
  }
}));
