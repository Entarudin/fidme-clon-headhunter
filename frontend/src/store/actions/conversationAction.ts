import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

export const axiosGetConversation = createAsyncThunk(
  'conversation/axiosGetConversation',
  async (id: string | null, thunkAPI) => {
    try {
      const response = await api.get(`/conversation/${id}`);
      return response.data;
    } catch (err: any) {
      if (err.message) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const saveData = createAction(
  'conversation/saveData',
  function save(id: string, members: string[]) {
    return {
      payload: {
        members: members ? members : [],
        _id: id ? id : null
      }
    };
  }
);
