"use strict";

import React, { Component, PropTypes } from "react";
import { randomString, makeFormItem } from "../util";

const TITLE = "title";
const EMAIL = "email";
const KEYWORD = "keyword";
const FIELD_IDS = [TITLE, EMAIL, KEYWORD];
const FIELD_DESCRIPTORS = Object.freeze([
    {
        type: "text",
        id: TITLE,
        valueGen: randomString,
        displayName: "Quiz title:"
    },
    {
        type: "email",
        id: EMAIL,
        placeHolder: "Email to have more rights",
        displayName: "Email:"
    },
    {
        type: "password",
        id: KEYWORD,
        displayName: "Keyword:"
    }
]);

var fieldSetCreator = (fieldDescriptor, index) => {
    var { valueGen, displayName, type, id } = fieldDescriptor;
    var defaultValue = valueGen ? valueGen() : "";
    return (
        <div className="card-block" key={ index }>
            <fieldset className="from-group mb-1" >
                <label>
                    { displayName }
                </label>
                <input type={ type }
                       ref={ id }
                       defaultValue={ defaultValue }
                       className="form-control"
                />
            </fieldset>
        </div>
    );
};

var makeQuiz = makeFormItem(FIELD_IDS);
var createQuiz = ({ addQuiz }, refs)=> event=> {
    event.preventDefault();
    var quiz = makeQuiz(refs);
    addQuiz(quiz);
};
class CreateQuizForm extends Component {
    render() {
        return (
            <form onSubmit={ createQuiz(this.props, this.refs)}>
                <div className="card">
                    <div className="card-header">Create new quiz</div>
                    { FIELD_DESCRIPTORS.map(fieldSetCreator) }
                    <button className="btn btn-primary mt-10" type="submit">
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

CreateQuizForm.PropTypes = {
    addQuiz: PropTypes.func.isRequired
};

export default  CreateQuizForm;