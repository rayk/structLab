const rxSpy = require("rxjs-spy").create();
import "rxjs-spy/operator/tag";
import React from "react";
import ReactDOM from "react-dom";
import { Subject } from "rxjs";

const action$ = new Subject().tag("Action Subject");

const initState = { value: "Some Initial Value" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

const store$ = action$.startWith(initState).scan(reducer);

const actionDispatcher = func => (...args) => action$.next(func(...args));

const setValue = actionDispatcher(payload => ({ type: "SET", payload }));

export const App = props => {
  const { value } = props;
  return (
    <div>
      <h1>Counter</h1>
      <p>Value: {value}</p>
      <button onClick={() => setValue("First Value")}>First</button>
      <button onClick={() => setValue("Second Value")}>Second</button>
    </div>
  );
};

store$.subscribe(state =>
  ReactDOM.render(<App {...state} />, document.getElementById("app"))
);
