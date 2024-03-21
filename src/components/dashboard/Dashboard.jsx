import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../base-components/Button';
import QuestionList from '../question-panel/QuestionList';
import { addQuestion } from '../../state-management/questionSlice';
import MainForm from '../question-panel/MainQuestionForm';
import './Dashboard.css';
import { useQuestions } from '../../custom-hooks/useNewQuestionHook';
import Footer from '../footer/Footer';

const Dashboard = () => {
    const questions = useSelector((state) => state.questions);
    const { addNewParentQuestion } = useQuestions();
    const dispatch = useDispatch();

    const handleAddParentQuestion = () => {
        addNewParentQuestion();
    };

    return (
        <div className="dashboard-main">
            <div className="dashboard">
                <div className="dashboard-head">
                    <h3>Total Main Questions : {questions.length}</h3>
                    <div className="button-container">
                        <Button
                            buttonText={'Add Question'}
                            styleClasses={['glass-button']}
                            clickAction={handleAddParentQuestion}
                        />
                    </div>
                </div>
                <div className="content">
                    {questions.length > 0 && (
                        <div className="question-list">
                            <QuestionList />
                        </div>
                    )}
                    <div className="main-form">
                        <MainForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
