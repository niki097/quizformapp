import { createSlice } from '@reduxjs/toolkit';

const openQuestionSlice = createSlice({
  name: 'openQuestion',
  initialState: {idOnly: null, parentId:null , fullQuestion: null},
  reducers: {
    openQuestionForEdit: (state, action) => {
	  state.idOnly = action.payload.idOnly; 
	  state.parentId = action.payload.parentId ? action.payload.parentId : null;
	  state.fullQuestion = action.payload.fullQuestion ? action.payload.fullQuestion : null;
	}
  },
});

export const { openQuestionForEdit } = openQuestionSlice.actions;

export default openQuestionSlice.reducer;