import React from "react";

export const QuizOption = ({
    answer,
    handleUserAnswers,
    isQuizCompleted,
    index,
    currentAnswerIndex,
    correctAnswerIndex,
}) => {
    const isSelectedOption = currentAnswerIndex === index;
    return (
        <div
            onClick={() => handleUserAnswers(index)}
            style={{
                backgroundColor: isSelectedOption ? "yellow" : "initial",
                transition: "all 0.4s ease",
            }}
        >
            <span className="quizButton">{answer}</span>
        </div>
    );
};
