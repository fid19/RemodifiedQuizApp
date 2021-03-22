import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LandingPage } from "./LandingPage";
import { Quiz } from "./Quiz";
import { QuizRender } from "./components/QuizRender";

// 1. react-router-dom (npm library) for routing system
// 2. The above is using history API from the browser
// 3. This is for SPA (Single Page Applications), no browser reload, just content change
// 4. json-server for backend to read quiz questions by ID

// you can have more of this probably

// /quiz/123
// import {useParams} from 'react-router-dom'
// const {id } = useParams();

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    {/* Dynamic way /quiz/:id */}
                    <Route path="/quiz/:id">
                        <Quiz />
                    </Route>
                    <Route path="/quiz/:id/:questionTagNo">
                        <QuizRender />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
