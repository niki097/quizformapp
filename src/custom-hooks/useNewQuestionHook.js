import { useDispatch, useSelector } from 'react-redux';
import {
    addQuestion,
    addQuestionChild,
    deleteQuestion,
    deleteChildQuestion as deleteChildQuestionAction,
} from '../state-management/questionSlice';
import { nanoid } from 'nanoid';
import { openQuestionForEdit } from '../state-management/singleQuestionSlice';

export const useQuestions = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions);
    const openQuestion = useSelector((state) => state.openQuestion);

    const addNewParentQuestion = () => {
        try {
            const newQuestion = {
                id: nanoid(10),
                parentId: null,
                text: '',
                type: '',
                answer: '',
                children: [],
            };
            dispatch(addQuestion(newQuestion));
            setOpenQuestionForEdit(newQuestion);
        } catch (error) {
            console.log('Failed to add parent question');
        }
    };

    const addNewChildQuestion = (parentId) => {
        try {
            const newQuestion = {
                id: nanoid(10),
                parentId: parentId,
                text: '',
                type: '',
                answer: '',
            };
            dispatch(addQuestionChild(newQuestion));
            setOpenQuestionForEdit(newQuestion);
        } catch (error) {
            console.log('Failed to add child question');
        }
    };

    const deleteParentQuestion = (questionId) => {
        try {
            dispatch(deleteQuestion(questionId));
            console.log('Parent question deleted successfully');
        } catch (error) {
            console.log('Failed to delete parent question');
        }
    };

    const deleteChildQuestion = (parentId, childId) => {
        try {
            dispatch(deleteChildQuestionAction({ parentId, childId }));
            console.log('Child question deleted successfully');
        } catch (error) {
            console.log('Failed to delete child question');
        }
    };

    const getCurrentEditingQuestion = () => {
        let questionToEdit = questions.find(
            (q) => q.id === openQuestion.idOnly
        );
        if (!questionToEdit) {
            let parent = questions.find((q) => q.id === openQuestion.parentId);
            questionToEdit = parent?.children?.find(
                (q) => q.id === openQuestion.idOnly
            );
        }
        return questionToEdit;
    };

    const setOpenQuestionForEdit = (question) => {
        dispatch(
            openQuestionForEdit({
                idOnly: question.id,
                parentId: question.parentId,
                fullQuestion: question,
            })
        );
    };

    return {
        addNewParentQuestion,
        addNewChildQuestion,
        getCurrentEditingQuestion,
        setOpenQuestionForEdit,
        deleteParentQuestion,
        deleteChildQuestion,
    };
};
