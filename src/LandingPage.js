import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export const LandingPage = () => {
    return (
        <header>
            <div className="landingPage">
                <div className="btnbutton">
                    <Link className="Link btnStyle btnStyle1" to="/quiz/math">
                        Math Quiz
                    </Link>
                    <Link
                        className="Link btnStyle btnStyle2"
                        to="/quiz/chemistry"
                    >
                        Chemistry Quiz
                    </Link>
                    <Link
                        className="Link btnStyle btnStyle1"
                        to="/quiz/physics"
                    >
                        Physics Quiz
                    </Link>
                </div>
            </div>
        </header>
    );
};
