import styled from 'styled-components';

export const StyledMessenger = styled.div(({}) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  '.chatMenu': {
    width: '30%'
  },
  '.chatMenuInput': {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    padding: '10px 0',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  },
  '.chatMenuWrapper': {
    paddingLeft: 30
  },
  '.chatMenuWrapper, .chatBoxWrapper': {
    height: '100%'
  },
  '.noConversationText': {
    fontSize: 40,
    color: 'rgb(224, 220, 220)',
    paddingLeft: '5%',
    height: '100%',
    minHeight: 478,
    paddingTop: '10%',
    cursor: 'default'
  },
  '@media screen and (max-width: 768px)': {
    '.chatMenu': {
      flex: 1
    },
    '.noConversationText': {
      fontSize: 30
    }
  },
  '@media screen and (max-width: 550px)': {
    width: '95%',
    '.chatMenu': {
      width: '20%'
    },
    '.chatMenuInput': {
      display: 'none'
    },
    '.noConversationText': {
      fontSize: 15
    },
    '.chatMenuWrapper': {
      paddingLeft: 10
    }
  }
}));

export const StyledChatBox = styled.div(({}) => ({
  width: '80%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '.chatBoxWrapper': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative'
  },
  '.chatBoxTop': {
    paddingLeft: 25,
    minHeight: 395,
    overflowY: 'scroll',
    paddingRight: 25,
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      height: 40,
      backgroundColor: '#D0D0D0'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 8
    }
  },
  '.chatBoxBottom': {
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '8px 0px 36px 20px'
  },
  '.chatMessageInput': {
    display: 'block',
    width: '80%',
    height: 90,
    padding: 10,
    background: '#FFFFFF',
    border: '1px solid #3D9AC5',
    boxSizing: 'border-box',
    borderRadius: 20
  },
  '.chatSubmitButton': {
    display: 'block',
    width: 84,
    height: 59,
    border: '2px solid #3D9AC5',
    borderRadius: 20,
    cursor: 'pointer',
    boxSizing: 'border-box',
    backgroundColor: '#3D9AC5',
    color: 'white',
    marginRight: 20
  },
  '.offButton': {
    opacity: 0.5,
    pointerEvents: 'none'
  },
  '@media screen and (max-width: 760px)': {
    width: '66%',
    '.chatMessageInput': {
      width: '75%',
      height: 90,
      padding: 10,
      borderRadius: 20
    },
    '.chatSubmitButton': {
      width: 65,
      height: 59,
      borderRadius: 20,
      marginRight: 20
    }
  },
  '@media screen and (max-width: 550px)': {
    width: '80%',
    '.chatBoxTop': {
      padding: '8px 0px 36px 15px'
    },
    '&::-webkit-scrollbar': {
      width: 4
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      height: 40,
      backgroundColor: '#D0D0D0'
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 4
    },
    '.chatMessageInput': {
      width: '66%',
      height: 90,
      padding: 10,
      borderRadius: 20,
      fontSize: 10
    },
    '.chatSubmitButton': {
      width: 45,
      height: 45,
      borderRadius: 20,
      marginRight: 20
    }
  }
}));

export const Wrapper = styled.div(({}) => ({
  position: 'absolute',
  left: 250,
  top: 70,
  zIndex: 0,
  width: '75%',
  '@media screen and (max-width: 1024px)': {
    width: '100%',
    left: 0
  },
  '@media screen and (max-width: 760px)': {
    width: '100%',
    left: 0,
    top: 45
  }
}));
