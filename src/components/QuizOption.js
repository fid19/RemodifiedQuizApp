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
    const isCorrect = correctAnswerIndex === index;
    return (
        <div>
            {isQuizCompleted ? (
                <div
                    style={{
                        backgroundColor: isCorrect
                            ? "green"
                            : isSelectedOption
                            ? "red"
                            : "initial",
                    }}
                >
                    <span className="quizButtonCompleted">{answer}</span>
                </div>
            ) : (
                <div
                    onClick={() => handleUserAnswers(index)}
                    style={{
                        backgroundColor: isSelectedOption
                            ? "yellow"
                            : "initial",
                    }}
                >
                    <span className="quizButton">{answer}</span>
                </div>
            )}
        </div>
    );
};
