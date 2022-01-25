import React from "react";

const Button = ({ name, text, lastFocused }) => {
  const onClick = () => {
    if (lastFocused.setChange) lastFocused.setChange(name);
  };
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
