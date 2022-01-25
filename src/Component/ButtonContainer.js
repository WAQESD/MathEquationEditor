import React from "react";
import Button from "./Button";

const ButtonContainer = ({ lastFocused }) => {
  return (
    <div className="button-container">
      <Button name={"equal"} text={"="} lastFocused={lastFocused}></Button>
    </div>
  );
};

export default ButtonContainer;
