import React from "react";
import FontSizeController from "./FontSizeController";

const Title = ({ setFontSize }) => {
  return (
    <div className="title">
      <div className="name">Math Equation Editor</div>
      <FontSizeController setFontSize={setFontSize} />
    </div>
  );
};

export default Title;
