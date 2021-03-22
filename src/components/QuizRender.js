import React from "react";
import { QuizButtons } from "./QuizButtons";
import { QuizOption } from "./QuizOption";
import { QuizQuestion } from "./QuizQuestion";
import { useParams } from "react-router-dom";

export const QuizRender = ({
    question,
    answers,
    userAnswers,
    currentAnswerIndex,
    isLastQuestion,
    isNextDisabled,
    handleUserAnswers,
    handlePreviousClick,
    handleQuizCompleted,
    handleNextClick,
    isPrevDisabled,
}) => {
    const { questionTagNo } = useParams();

    return (
        <div className="box">
            <QuizQuestion question={question} />

            <div className="input-group">
                {answers.map((answer, index) => (
                    // Make a Question component out of it
                    <QuizOption
                        answer={answer}
                        handleUserAnswers={handleUserAnswers}
                        index={index}
                        key={index}
                        value={index}
                        userAnswers={userAnswers}
                        currentAnswerIndex={currentAnswerIndex}
                    />
                ))}
            </div>
            {/* Extract to QuizButtons component */}
            <QuizButtons
                isPrevDisabled={isPrevDisabled}
                handlePreviousClick={handlePreviousClick}
                isNextDisabled={isNextDisabled}
                isLastQuestion={isLastQuestion}
                handleQuizCompleted={handleQuizCompleted}
                handleNextClick={handleNextClick}
            />
        </div>
    );
};
