import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const axiosGetprofileStudent = createAsyncThunk(
  'profile/axiosGetprofileStudent',
  async (id: string | null, thunkAPI) => {
    try {
      const response = await api.get(`/profile/${id}`);
      return response.data;
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const axiosGetProfileCompany = createAsyncThunk(
  'profile/axiosGetProfileCompany',
  async (id: string | null, thunkAPI) => {
    try {
      const response = await api.get(`/profile/${id}`);
      return response.data;
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);
