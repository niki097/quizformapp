import React from 'react';
import './QuestionFormComponent.css';

const QuestionFormComponent = ({ question, handleInputChange }) => (
    <div key={question.id} className="question-form">
        <input
            type="text"
            placeholder="Question"
            value={question.text}
            onChange={(e) =>
                handleInputChange(e, question.id, question.parentId, 'text')
            }
            className="question-input"
        />
        <select
            value={question.type}
            onChange={(e) =>
                handleInputChange(e, question.id, question.parentId, 'type')
            }
            className="question-select"
        >
            <option value="">Select question type</option>
            <option value="Short-answer">Short Answer</option>
            <option value="Boolean-answer">True/False</option>
        </select>
        {question.type === 'Boolean-answer' ? (
            <select
                value={question.answer}
                onChange={(e) =>
                    handleInputChange(
                        e,
                        question.id,
                        question.parentId,
                        'answer'
                    )
                }
                className="question-select"
            >
                <option value="">Select answer</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        ) : (
            <input
                type="text"
                placeholder="Answer"
                value={question.answer}
                onChange={(e) =>
                    handleInputChange(
                        e,
                        question.id,
                        question.parentId,
                        'answer'
                    )
                }
                className="question-input"
            />
        )}
    </div>
);

export default QuestionFormComponent;
