import React from "react";

export const QuizOption = ({
    answer,
    handleUserAnswers,
    index,
    currentAnswerIndex,
}) => {
    const isSelectedOption = currentAnswerIndex === index;
    return (
        <div
            onClick={() => handleUserAnswers(index)}
            style={{ backgroundColor: isSelectedOption ? "yellow" : "initial" }}
        >
            <span>{answer}</span>
        </div>
    );
};
