import React, { useState, useEffect } from "react";
import Base from "./Base";

const Equal = ({ setText, fontSize, depth }) => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const baseProps = { fontSize, depth };

  useEffect(() => {
    setText(leftText + "=" + rightText);
  }, [leftText, rightText]);
  return (
    <div className="equal-wrapper">
      <Base {...baseProps} setText={setLeftText}></Base>
      <div
        className="equal"
        style={{
          fontSize: `${fontSize}pt`,
          margin: `0px ${fontSize / 10}px`,
        }}
      >
        =
      </div>
      <Base {...baseProps} setText={setRightText}></Base>
    </div>
  );
};

export default Equal;
