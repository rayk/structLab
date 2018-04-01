// @flow
import * as React from "react";

type Props = {
 label: string,
}

const Button = (props: Props) => {

  return(
    <div>
      <button>{props.label}</button>
    </div>
  );

};


export default Button;
