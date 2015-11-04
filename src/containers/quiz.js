"use strict";

import React, { Component } from "react";
import { CreateQuestionForm, QuestionList } from "../components";
import classNames from "classnames";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";

var actions = {};
var stateToProps = state=>({questions: []});
var setDispatcher = dispatcher=> bindActionCreators(actions, dispatcher);

var addQuestionToQuiz = ()=> {
};
var clickHandler = ()=> {
};
@connect(stateToProps, setDispatcher)
class Quiz extends Component {
    render() {
        return (
            <main className="container">
                <section className="row">
                    <div className="col-lg-6 col-lg-offset-1">
                        <CreateQuestionForm addQuestionToQuiz={addQuestionToQuiz}/>
                    </div>
                    <div className="col-lg-4">
                        <QuestionList questions={ this.props.questions } clickHandler={ clickHandler }/>
                    </div>
                </section>
            </main>
        );
    }
}


export default Quiz;

