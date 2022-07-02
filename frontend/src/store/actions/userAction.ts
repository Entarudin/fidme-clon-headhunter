import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const axiosGetUser = createAsyncThunk(
  'user/axiosGetUser',
  async (id: string | null, thunkAPI) => {
    try {
      const response = await api.get(`/user/${id}`);
      return response.data;
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const axiosGetCompanies = createAsyncThunk('user/axiosGetCompanies', async (_, thunkAPI) => {
  try {
    const response = await api.get('/user/company/find_companies/');
    return response.data;
  } catch (err: any) {
    if (err.message) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
});
