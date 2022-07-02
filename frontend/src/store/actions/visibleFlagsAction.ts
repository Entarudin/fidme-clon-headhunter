import { createAction } from '@reduxjs/toolkit';

export const setStatusRegistration = createAction(
  'visibleFlag/setStatusRegistration',
  function (status: boolean) {
    return {
      payload: {
        flag: status
      }
    };
  }
);
