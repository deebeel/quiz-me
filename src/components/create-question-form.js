"use strict";


import React, { Component, PropTypes } from "react";
import { randomString, getTrimmedValue, makeFormItem } from "../util";
const buttonWidth = {
    width:"7rem"
};
const QUESTION = "question";
const IS_RIGHT = "isRight";
const ID = "id";
const FIELD_IDS = [QUESTION, IS_RIGHT];

var makeQuestion = makeFormItem(FIELD_IDS);
var saveQuestion = ({addQuestionToQuiz}, refs)=>event=> {
    event.preventDefault();
    var question = makeQuestion(refs);
    addQuestionToQuiz(question);
};

class CreateQuestionForm extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Create question</div>
                <div className="card-block">
                    <form>
                        <fieldset className="form-group">
                            <label>Question name:</label>
                            <input className="form-control" type="text" ref={ ID }/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Question text:</label>
                            <textarea rows="4" className="form-control" ref={ QUESTION }></textarea>
                        </fieldset>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" ref={ IS_RIGHT }/> Is right
                            </label>
                        </div>

                        <button type="submit"
                                style={ buttonWidth }
                                className="btn btn-primary mh-1"
                                onSubmit={ saveQuestion(this.props, this.refs) }>
                            Save
                        </button>
                        <button type="submit"
                                style={ buttonWidth }
                                className="btn btn-default mh-1">Clear</button>
                        <button type="submit"
                                style={ buttonWidth }
                                className="btn btn-danger pull-right mh-1">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

CreateQuestionForm.ProtTypes = {
    addQuestionToQuiz: PropTypes.func.isRequired
};
export default CreateQuestionForm;
