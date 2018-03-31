/* eslint-disable fp/no-mutation */
const rxSpy = require("rxjs-spy").create();
import style from "./main.css";
import "rxjs-spy/operator/tag";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { BehaviorSubject } from "rxjs";

const initState = { value: "Initial Default Value" };
const action$ = new BehaviorSubject(initState).tag("action$");

// Reducer is included with the receiver of the action
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// Stream is independent
const stateStore$ = action$.scan(reducer);

// Generic for all action emitters to use.
const actionDispatcher = func => (...args) => action$.next(func(...args));

// Specialised within a given emitter.
const clickHandler = actionDispatcher(payload => ({
  type: "ADD",
  payload
}));

// View element of the receiver.
export const Lens = props => {
  const { value } = props;
  return (
    <div>
      <h1 style={style.header}>Value: {value}</h1>
      <button onClick={() => clickHandler("First Payload Value")}>First</button>
      <button onClick={() => clickHandler("Second Payload Value")}>
        Second
      </button>
    </div>
  );
};

Lens.propTypes = {
  value: PropTypes.string
};

stateStore$.subscribe(state =>
  ReactDOM.render(<Lens {...state} />, document.getElementById("app"))
);
