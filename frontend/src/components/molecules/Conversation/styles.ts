import styled from 'styled-components';

export const StyledConversation = styled.div(({}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  minWidth: 150,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'rgb(245, 243, 243)'
  },

  '.conversationImg': {
    width: 55,
    height: 55,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 18
  },

  '.conversationName': {
    fontWeight: 500,
    fontFamily: 'Palanquin',
    color: '#323232'
  },

  '@media screen and (max-width: 768px)': {
    minWidth: 100,
    '.conversationName ': {
      display: 'none'
    },
    '.conversationImg': {
      width: 40,
      height: 40,
      marginRight: 18
    },
    '@media screen and (max-width: 550px)': {
      minWidth: 50,
      marginTop: 20
    }
  }
}));
