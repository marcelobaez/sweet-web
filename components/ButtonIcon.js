import React from "react";

const ButtonIcon = props => {
  return (
    <button type='button' {...props}>
      {props.children}
    </button>
  );
};

export default ButtonIcon;
