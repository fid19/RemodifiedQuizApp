import "./App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuizButtons } from "./components/QuizButtons";
import { QuizOption } from "./components/QuizOption";
import { QuizQuestion } from "./components/QuizQuestion";
import { QuizResult } from "./components/QuizResult";
import { Link } from "react-router-dom";

// TODO
// 1. Introduce Quiz and Question component to allow dynamic questions
// 2. Save user answer in the state
// 3. Allow previous and next buttons to switch questions
// 4. Show results screen based on the user answers and the correct answers
// 5. Add proper landing page with ability to choose different quizzes

// ======== FRONTEND ==========

// HARDCODED ON THE FRONTEND, BUT JSON-SERVER (mock server) will be your first "backend/database" to get dynamic content
const data = {
    math: [
        {
            id: 0,
            question: "Math question blabla?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 1,
            question: "Placeholder quesiton?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 2,
            question: "Placeholder next quesiton last one?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
    ],
    chemistry: [
        {
            id: 0,
            question: "Chemistry question bla bla?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 1,
            question: "Placeholder quesiton?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 2,
            question: "Placeholder next quesiton last one?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
    ],
    physics: [
        {
            id: 0,
            question:
                "The Von Neumann architecure includes An ALU, Control Unit, Input/Output Facilities and?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 1,
            question: "Placeholder quesiton?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
        {
            id: 2,
            question: "Placeholder next quesiton last one?",
            answers: [
                "Main Memory",
                "Hard Drive",
                "Memory Card",
                "Flash Drive",
            ],
            correctAnswer: 1,
        },
    ],
};

// Maybe you will have more quizzes in the future
export const Quiz = () => {
    // we store where we are, e.g. what question is displayed on the screen via index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // we store what user is selecting, which answers exactly so later on we can compare and show if the answer is good or bad
    const [userAnswers, setUserAnswers] = useState({});
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [questions, setQuestions] = useState([]);

    const { id } = useParams();

    // this is componentDidMount
    // called once after initial render
    useEffect(() => {
        if (id) {
            setQuestions(data[id]);
        }
    }, [id]);

    // We're loading questions dynamically now, which means they could be empty
    // We need to prevent it from happening and crashing

    if (questions.length === 0) {
        return null;
    }

    // we extract current question properties based on the index of currently presented question
    const { id: questionId, question, answers } = questions[
        currentQuestionIndex
    ];
    const currentAnswerIndex = userAnswers[questionId];
    // const correctAnswerIndex = correctAnswer;
    const isSelectedOption = (questionIndex, answerIndex) =>
        userAnswers[questionIndex] === answerIndex;
    const isCorrect = (questionIndex, answerIndex) =>
        questions[questionIndex].correctAnswer === answerIndex;

    // console.log(questions[2].correctAnswer);
    // currentQuestionIndex - > 0
    // const {id,question,answers} = questions[currentQuestionIndex]
    // {[id]: [selectedAnswerIndex]}

    const handleUserAnswers = (userSelectedAnswerId) => {
        // It will create an object like this:
        // The left side is an id of the qubestmion, the right side is the actual index of the answer
        // {1: 0, 2: 1, 3: 2}
        // id: index
        // [questionId] -> 1 dynamic object property
        const updatedUserAnswers = {
            ...userAnswers,
            [questionId]: userSelectedAnswerId,
        };

        // [questionId]: index (user answer)
        setUserAnswers(updatedUserAnswers);
        // [id]: index
    };

    const handleNextClick = () => {
        // similar condition as in isNextDisabled and then you know it's a last quesiton so you can for example redirect user
        // to another page or introduce like  currentState for the quiz, "STARTED" -> "COMPLETED"
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePreviousClick = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    };

    const handleQuizCompleted = () => {
        setIsQuizCompleted(true);
        setCurrentQuestionIndex(0);
    };

    // If the user selected an answer and we can move forward
    // const isAnswerSelected =

    // If we are on the first question, user cannot press previous as there is no previous quuestion
    const isPrevDisabled = currentQuestionIndex === 0;
    // If we are on the last question, user cannot press next as there is no next question
    const isNextDisabled = currentAnswerIndex === undefined;
    // we need to introduce new button
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    // console.log(userAnswers);

    // if (COMPLETED) {
    //     return <div>quiz completed</div>
    // }

    // TODO Should be a separate component QuizCompleted.js
    // how to compare good and bad?
    // userAnswers -> [QUESTION ID]: [SELECTED INDEX]
    // {1: 0} -> first question, first option/answer selected
    // questions -> array of objects, an example object is this:
    //     {
    // id: 2,
    // question: "Placeholder next quesiton last one?",
    // answers: ["Main Memory", "Hard Drive", "Memory Card", "Flash Drive"],
    // correctAnswer: 1,
    // map over questions and compare with the answers
    // {2: 0} -> questions: correctAnswer: 1 -> wrong
    // {2: 1} -> questions: correctAnswer: 1 -> correct
    // map over the above ^ and render proper answer with green
    // and wrong answer with red

    if (isQuizCompleted) {
        const sum = questions.reduce((acc, item) => {
            return item.correctAnswer === userAnswers[item.id]
                ? (acc += 1)
                : acc;
        }, 0);
        const result = parseInt((sum / questions.length) * 100);

        return (
            <section>
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
            </section>
        );
    }

    return (
        <section>
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
        </section>
    );
};
