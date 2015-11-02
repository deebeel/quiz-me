"use strict";
import { Route, Router, IndexRoute } from "react-router";
import { render } from "react-dom";
import React  from "react";
import { Provider } from "react-redux";
import store from "./store";
import { App, Home, Quiz } from "./containers";
var routes = (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/quiz/:quiz" component={ Quiz }/>
        <Route path="*" component={ Home }/>
    </Route>
);
var root = (
    <Provider store={ store() }>
        <Router children={ routes }/>
    </Provider>
);
render(root, document.getElementById('root'));