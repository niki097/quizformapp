import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionSlice';
import openQuestionSlice from './singleQuestionSlice';

const store = configureStore({
  reducer: {
    questions: questionReducer,
	openQuestion: openQuestionSlice,
  },
});

export default store;