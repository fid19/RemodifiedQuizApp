import React from "react";

export const QuizResult = ({ result }) => {
    return (
        <h2
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            Score: {result}%
        </h2>
    );
};
