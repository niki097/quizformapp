import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
	name: 'questions',
	initialState: [],
	reducers: {
		addQuestion: (state,action) => {
			const newQuestion = {
				id: action.payload.id,
				parentId: action.payload.parentId,
				text: action.payload.text,
				type: action.payload.type,
				answer: action.payload.answer,
				children: action.payload.children,
			};
			state.push(newQuestion);
		},
		addQuestionChild: (state,action) => {
			const parentQuestion = state.find(q => q.id === action.payload.parentId);
			if (parentQuestion) {
				if (!('children' in parentQuestion)) {
					parentQuestion.children = [];
				}
				parentQuestion.children.push({
					id: action.payload.id,
					parentId: action.payload.parentId,
					text: action.payload.text,
					type: action.payload.type,
					answer: action.payload.answer,
				});
			}
		},
		updateQuestion: (state,action) => {
			if(action.payload.parentId && action.payload.parentId !== null){
				const parentQuestion = state.find(q => q.id === action.payload.parentId);
				if (parentQuestion) {
					const childQuestion = parentQuestion.children.find(q => q.id === action.payload.quesId);
					if (childQuestion) {
						childQuestion[action.payload.field] = action.payload.value;
					}
				}
			}else{
				const question = state.find(q => q.id === action.payload.quesId);
				if (question) {
					question[action.payload.field] = action.payload.value;
				}
			}
		},
		deleteQuestion: (state,action) => {
			return state.filter((question) => question.id !== action.payload);
		},
		deleteChildQuestion: (state,action) => {
			const parentQuestion = state.find(q => q.id === action.payload.parentId);
			if (parentQuestion) {
				parentQuestion.children = parentQuestion.children.filter((child) => child.id !== action.payload.childId);
			}
		}
	},
});

export const { addQuestion, addQuestionChild ,updateQuestion,deleteQuestion,deleteChildQuestion } = questionSlice.actions;

export default questionSlice.reducer;