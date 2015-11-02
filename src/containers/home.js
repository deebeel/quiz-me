"use strict";

import React, { Component } from "react";
import { CreateQuizForm } from "../components";

var addQuiz = (quiz)=> alert(quiz);


class Home extends Component {
    render() {
        return (
            <main className="container-fluid">
                <section className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <CreateQuizForm addQuiz={ addQuiz }/>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;




