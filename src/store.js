"use strict";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

export default (initialState = {})=> applyMiddleware(thunk)(createStore)(reducer, initialState);