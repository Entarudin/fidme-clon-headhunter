import { createSlice } from '@reduxjs/toolkit';
import { Conversation } from '../../models/conversation';
import { axiosGetConversation, saveData } from '../actions/conversationAction';

interface ConversationProps {
  conversations: Conversation[];
  currentConversation: saveConversationProps;
  status: string | null;
  error: string | unknown;
}

interface saveConversationProps {
  members: string[];
  _id: string | null;
}

const initialState: ConversationProps = {
  conversations: [],
  currentConversation: {
    _id: null,
    members: []
  },
  status: null,
  error: null
};

export const conversationSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosGetConversation.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(axiosGetConversation.fulfilled, (state, action) => {
        (state.conversations = action.payload), (state.status = 'resolved');
      })
      .addCase(axiosGetConversation.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
    builder.addCase(saveData, (state, action) => {
      state.currentConversation._id = action.payload._id;
      state.currentConversation.members = action.payload.members;
    });
  }
});
