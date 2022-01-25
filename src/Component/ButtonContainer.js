import React from "react";
import Button from "./Button";

const ButtonContainer = ({ lastFocused }) => {
  return (
    <div className="button-container">
      <Button name={"equal"} text={"="} lastFocused={lastFocused}></Button>
      <Button
        name={"integral"}
        text={"\u222B"}
        lastFocused={lastFocused}
      ></Button>
    </div>
  );
};

export default ButtonContainer;
