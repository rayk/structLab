/* eslint-disable fp/no-mutation */
const rxSpy = require("rxjs-spy").create();
const isObservable = require("is-observable");
import style from "./main.css";
import "rxjs-spy/operator/tag";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { BehaviorSubject, Observable } from "rxjs";
import { action } from "./constants";

const endPoint = {
  url: "https://reqres.in/api/users?delay=2"
};
const initState = { value: "Initial Default Value" };
const action$ = new BehaviorSubject(initState).tag("action$");

const fetchUsers$ = Observable.ajax(endPoint).tag("remoteEndPoint");

const actionDispatcher = func => (...args) => action$.next(func(...args));

const dispatch = func => (...args) => {
  const action = func.call(null, ...args);
  action$.next(action);
  if (isObservable(action.payload)) action$.next(action.payload);
  return action;
};

const reducer = (state, action) => {
  switch (action.type) {
    case action.valueCreate:
      return { ...state, value: action.payload };
    case "FETCHING":
      return { ...state, isLoading: true };
    case "FETCHED":
      return { ...state, isLoading: false, value: action.payload };
    default:
      return state;
  }
};

const stateStore$ = action$.scan(reducer);

const clickHandler = actionDispatcher(payload => ({
  type: action.valueCreate,
  payload
}));
const fetchHandler = dispatch(payload => ({
  type: "FETCHING",
  payload: payload
}));

export const RemoteLens = props => {
  const { value } = props;

  return (
    <div>
      <h1 style={style.header}>Value: {value}</h1>
      <button onClick={() => clickHandler("First Selected Value")}>
        First
      </button>
      <button onClick={() => clickHandler("Second Selected Value")}>
        Second
      </button>
      <button onClick={() => fetchHandler(fetchUsers$)}>Fetch</button>
    </div>
  );
};

RemoteLens.propTypes = {
  value: PropTypes.string
};

stateStore$.subscribe(state =>
  ReactDOM.render(<RemoteLens {...state} />, document.getElementById("app"))
);
