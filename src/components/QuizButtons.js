import React from "react";

export const QuizButtons = ({
    isPrevDisabled,
    handlePreviousClick,
    isNextDisabled,
    handleNextClick,
    isLastQuestion,
    handleQuizCompleted,
}) => {
    return (
        <div className="click-folder">
            <button
                className="click-button btn btn1"
                disabled={isPrevDisabled}
                onClick={handlePreviousClick}
            >
                Previous
            </button>
            <div className="click-button"></div>
            {isLastQuestion ? (
                <button
                    className="click-button btn btn2"
                    disabled={isNextDisabled}
                    onClick={handleQuizCompleted}
                >
                    Complete
                </button>
            ) : (
                <button
                    className="click-button btn btn2"
                    disabled={isNextDisabled}
                    onClick={handleNextClick}
                >
                    Next
                </button>
            )}
        </div>
    );
};
