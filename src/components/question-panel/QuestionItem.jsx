import React from 'react';
import { useDispatch } from 'react-redux';
import { useQuestions } from '../../custom-hooks/useNewQuestionHook';
import { toast } from 'react-toastify';
import './QuestionItem.css';

const QuestionItem = ({ question, ParentIndex }) => {
    const dispatch = useDispatch();
    const { getCurrentEditingQuestion } = useQuestions();
    const opendQuestion = getCurrentEditingQuestion();
    const {
        setOpenQuestionForEdit,
        deleteParentQuestion,
        deleteChildQuestion,
    } = useQuestions();

    const handleEdit = (question) => {
        setOpenQuestionForEdit(question);
        console.log(`Edit question with id: ${question.id}`);
    };

    const handleDelete = (questionId, isChildDelete, childId) => {
        if (isChildDelete) {
            deleteChildQuestion(questionId, childId);
            toast.success(`Child question ${childId} deleted successfully`);
        } else {
            deleteParentQuestion(questionId);
            toast.success(`Parent question ${questionId} deleted successfully`);
        }
    };

    const renderQuestionDetails = (question, quesNo) => (
        <>
            <p>
                {/* Showing question no. +1 index */}
                <span className="s-no-lable">Question NO.:</span>
                <strong> {quesNo}</strong>
            </p>
            <p>
                <span>Question:</span> <strong> {question.text}</strong>
            </p>
            <p>
                <span className="label">Type:</span>
                {question.type}
            </p>
            <p>
                <span className="label">Answer:</span> {question.answer}
            </p>
        </>
    );

    return (
        <div className="question-item">
            {renderQuestionDetails(question, ParentIndex + 1)}
            <button
                onClick={() => handleDelete(question.id, false, null)}
                className="delete-button"
            >
                Delete
            </button>
            {(!opendQuestion || opendQuestion.id != question.id) && (
                <button
                    onClick={() => handleEdit(question)}
                    className="edit-button"
                >
                    Edit
                </button>
            )}

            {question.children.map((child, index) => (
                <div key={index} className="child-question">
                    {renderQuestionDetails(
                        child,
                        `${ParentIndex + 1}.${index + 1}`
                    )}
                    <button
                        onClick={() =>
                            handleDelete(question.id, true, child.id)
                        }
                        className="delete-button"
                    >
                        Delete
                    </button>
                    {(!opendQuestion || opendQuestion.id != child.id) && (
                        <button
                            onClick={() => handleEdit(child)}
                            className="edit-button"
                        >
                            Edit
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QuestionItem;
