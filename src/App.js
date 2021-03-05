import "./App.css";
import React, { useState } from "react";
import { QuizButtons } from "./components/QuizButtons";
import { QuizOption } from "./components/QuizOption";
import { QuizQuestion } from "./components/QuizQuestion";

// you can have more of this probably
const someTestQuestions = [
    {
        id: 0,
        question:
            "The Von Neumann architecure includes An ALU, Control Unit, Input/Output Facilities and?",
        answers: ["Main Memory", "Hard Drive", "Memory Card", "Flash Drive"],
        correctAnswer: 1,
    },
    {
        id: 1,
        question: "Placeholder quesiton?",
        answers: ["Main Memory", "Hard Drive", "Memory Card", "Flash Drive"],
        correctAnswer: 1,
    },
    {
        id: 2,
        question: "Placeholder next quesiton last one?",
        answers: ["Main Memory", "Hard Drive", "Memory Card", "Flash Drive"],
        correctAnswer: 1,
    },
];
let result = 0;
// TODO
// 1. Introduce Quiz and Question component to allow dynamic questions
// 2. Save user answer in the state
// 3. Allow previous and next buttons to switch questions
// 4. Show results screen based on the user answers and the correct answers
// 5. Add proper landing page with ability to choose different quizzes

// ======== FRONTEND ==========

// Maybe you will have more quizzes in the future
const Quiz = ({ questions }) => {
    // we store where we are, e.g. what question is displayed on the screen via index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // we store what user is selecting, which answers exactly so later on we can compare and show if the answer is good or bad
    const [userAnswers, setUserAnswers] = useState({});
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    // we extract current question properties based on the index of currently presented question
    const { id: questionId, question, answers, correctAnswer } = questions[
        currentQuestionIndex
    ];
    const currentAnswerIndex = userAnswers[questionId];

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

    if (isQuizCompleted) {
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
        const sum = questions.reduce((acc, item) => {
            return item.correctAnswer === userAnswers[item.id]
                ? (acc += 1)
                : acc;
        }, 0);

        console.log(sum);
        return (
            <section>
                <div className="box">
                    <h2
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {sum}
                    </h2>
                </div>
            </section>
        );
        /* 
        <Header>Quiz Completed</Header>
        <Result>Your score was: 5/10, 50%</Result>
        {questions.map((question) => {
            if (question.correctAnswer === userAnswers[question.id]) {
                correct
            } else {
                wrong / incorrect
            }

            return <QuestionResult />
        })}
        */
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

function App() {
    return (
        <div className="App">
            <Quiz questions={someTestQuestions} />
        </div>
    );
}

export default App;
