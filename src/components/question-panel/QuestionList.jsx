import React from 'react';
import { useSelector } from 'react-redux';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
    const questions = useSelector((state) => state.questions);

    return (
        <div>
            {questions.map((question, index) => (
                <QuestionItem
                    key={question.id}
                    question={question}
                    ParentIndex={index}
                />
            ))}
        </div>
    );
};

export default QuestionList;
