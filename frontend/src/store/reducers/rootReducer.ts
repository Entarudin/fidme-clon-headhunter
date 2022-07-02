import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index';
import { conversationSlice } from './conversationSlice';
import { profileSlice } from './profileSlice';
import { userSlice } from './userSlice';
import { vacancySlice } from './vacancySlice';
import {visibleFlagsSlice} from './visibleFlagsSlice';

export const rootReducer = combineReducers({
  conversation: conversationSlice.reducer,
  profile: profileSlice.reducer,
  user: userSlice.reducer,
  vacancies: vacancySlice.reducer,
  flags: visibleFlagsSlice.reducer
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
