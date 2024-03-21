import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../base-components/Button';
import QuestionFormComponent from './QuestionForm';
import {
    addQuestion,
    updateQuestion,
} from '../../state-management/questionSlice';
import './MainQuestionForm.css';
import { useQuestions } from '../../custom-hooks/useNewQuestionHook';

const MainForm = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions);
    const {
        addNewParentQuestion,
        addNewChildQuestion,
        getCurrentEditingQuestion,
    } = useQuestions();
    const openQuestion = getCurrentEditingQuestion();

    const handleAddMainQuestion = () => {
        addNewParentQuestion();
    };

    const handleAddChildQuestion = (parentId) => {
        addNewChildQuestion(parentId);
    };

    const handleInputChange = (e, quesId, parentId, field) => {
        console.log(
            'handleInputChange ' +
                e.target.value +
                ' ' +
                quesId +
                ' ' +
                parentId +
                ' ' +
                field
        );
        dispatch(
            updateQuestion({ quesId, parentId, field, value: e.target.value })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(questions);
    };

    return openQuestion ? (
        <form onSubmit={handleSubmit} className="glass-form">
            <h3>
                {openQuestion.idOnly}
                {openQuestion?.parentId ? 'Child Question' : 'Main Question'}
            </h3>
            {openQuestion ? (
                <QuestionFormComponent
                    key={openQuestion.id}
                    question={openQuestion}
                    handleInputChange={handleInputChange}
                />
            ) : (
                <Button
                    buttonText="Add New Question"
                    styleClasses={['glass-button']}
                    clickAction={() => handleAddMainQuestion()}
                />
            )}
            {!openQuestion.parentId && (
                <Button
                    buttonText="Add New Child Question"
                    styleClasses={['glass-button']}
                    clickAction={() => handleAddChildQuestion(openQuestion?.id)}
                />
            )}
            {/* <Button buttonText="Submit" styleClasses={['glass-button']} clickAction={handleSubmit} /> */}
        </form>
    ) : (
        <div className="no-question">
            <p>
                {questions?.length
                    ? 'No question selected'
                    : 'Please add a new question to edit'}
            </p>
        </div>
    );
};

export default MainForm;
