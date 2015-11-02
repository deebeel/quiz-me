"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
var actions = {};
var stateToProps = (state)=>({});
var setDispatcher = (dispatcher)=> bindActionCreators(actions, dispatcher);

@connect(stateToProps, setDispatcher) class App extends Component {
    render() {
        return (
            <div>
                <header className="container">
                    header
                </header>
                { this.props.children }
                <footer className="bd-footer text-muted">
                    <div className="container">footer</div>
                </footer>
            </div>
        );
    }
}


export default App