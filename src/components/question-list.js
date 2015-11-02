"use strict";
import React, { Component, PropTypes } from "react";


var Question = ({name, clickHandler})=>(
    <li className="list-group-item" onClick={ clickHandler }>{ name }</li>
);

var QuestionList = ({ questions, clickHandler })=> {
    var questionItems = questions.map((q, index)=>(
            <Question key={index}
                      name={q.name}
                      clickHandler={ clickHandler }/>
        )
    );
    return (
        <div className="card">
            <div className="card-header">Question-list</div>
            <div className="card-block">
                <ul className="list-group">
                    { questionItems }
                </ul>
            </div>
        </div>
    );
};

QuestionList.PropTypes = {
    clickHandler: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired
};


export default QuestionList;






