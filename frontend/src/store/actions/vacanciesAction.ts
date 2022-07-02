import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const axiosGetVacancies = createAsyncThunk(
  'vacancy/axiosGetVacancies',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/vacancy');
      return response.data;
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const axiosGetVacancyById = createAsyncThunk(
  'vacancy/axiosGetVacancyById',
  async (id: string | undefined, thunkAPI) => {
    try {
      if (id) {
        const response = await api.get(`/vacancy/${id}`);
        return response.data;
      }
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);
