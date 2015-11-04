"use strict";

import React, { Component, ProtTypes} from "react";
import { connect } from "react-redux";


var answerHandle = ()=>{};

class QuestionView extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    QUestion n1
                </div>
                <div className="card-block">
                    <form>
                        <fieldset className="form-group">
                            <textarea rows="3" className="form-control"/>
                        </fieldset>
                        <button type="submit" className="btn btn-success mh-1 btn-width">
                            Yes
                        </button>
                        <button type="submit" className="btn btn-danger mh-1 btn-width pull-right">
                            No
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

class QuizView extends Component {
    render() {
        return (
            <main className="container">
                <section className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <QuestionView/>
                    </div>
                </section>
            </main>
        );
    }
}


export default QuizView;


