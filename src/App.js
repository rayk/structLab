import React from "react";
import ReactDOM from "react-dom";

export const App = () => {
  return (
    <div>
      <p>Delivered Via React !</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
