import React from "react";
import PropTypes from "prop-types";

const Button = ({props}) => {

  const { label } = props;

  return(
    <div>
      <button>{label}</button>
    </div>
  );

};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
