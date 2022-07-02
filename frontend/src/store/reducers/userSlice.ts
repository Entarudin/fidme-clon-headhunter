import { createSlice } from '@reduxjs/toolkit';
import { axiosGetUser, axiosGetCompanies } from '../actions/userAction';

interface CompanyProps {
  _id: string | null;
  name: string | null;
  profile: {
    profileImage: null | string;
  };
}

interface UsersProps {
  companies: CompanyProps[];
  name: string | null;
  role: string | null;
  status: string | null;
  error: string | unknown;
}

const initialState: UsersProps = {
  companies: [],
  name: null,
  role: null,
  status: null,
  error: null
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosGetUser.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.name = action.payload.name;
        state.status = 'resolved';
      })
      .addCase(axiosGetUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(axiosGetUser.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(axiosGetCompanies.fulfilled, (state, action) => {
        state.companies = action.payload;
        state.status = 'resolved';
      })
      .addCase(axiosGetCompanies.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(axiosGetCompanies.pending, (state) => {
        state.status = 'loading';
      });
  }
});
