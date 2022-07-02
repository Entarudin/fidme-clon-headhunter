import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle(({}) => ({
  '.p-sidebar-mask.p-component-overlay': {
    pointerEvents: 'none'
  },
  '.p-component-overlay-enter': {
    animation: 'none'
  },
  ' .p-sidebar-left .p-sidebar': {
    width: 250
  }
}));
