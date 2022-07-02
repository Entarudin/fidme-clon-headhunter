import { createSlice } from '@reduxjs/toolkit';
import { setStatusRegistration } from '../actions/visibleFlagsAction';

interface VisibleFlags {
  registrationVisibleFlag: boolean;
};

const initialState: VisibleFlags = {
  registrationVisibleFlag: true
};

export const visibleFlagsSlice = createSlice({
  initialState,
  name: 'visibleFlag',
  reducers: {
    setStatusRegistration: (state, action) => {
      state.registrationVisibleFlag = action.payload.flag;
    }
  }
});
