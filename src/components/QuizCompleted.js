import React from "react";
import { QuizResult } from "./QuizResult";
import { Link } from "react-router-dom";

export const QuizCompleted = ({
    result,
    questions,
    answers,
    isCorrect,
    isSelectedOption,
}) => {
    return (
        <div className="result-box">
            <QuizResult result={result} />
            {questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                    <h2>{question.question}</h2>
                    <div className="input-group">
                        {answers.map((answer, answerIndex) => (
                            <div
                                style={{
                                    backgroundColor: isCorrect(
                                        questionIndex,
                                        answerIndex
                                    )
                                        ? "green"
                                        : isSelectedOption(
                                              questionIndex,
                                              answerIndex
                                          )
                                        ? "red"
                                        : "intial",
                                }}
                                key={answerIndex}
                            >
                                <span className="quizCompleteButton">
                                    {answer}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <Link to="/" className="quizHover">
                Start New Quiz
            </Link>
        </div>
    );
};
