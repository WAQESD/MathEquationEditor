import React from "react";
import Base from "./Base";
import { useState, useEffect } from "react/cjs/react.development";

const Integral = ({ setText, fontSize, depth, setClick, setLastFocused }) => {
  const [upText, setUpText] = useState("");
  const [downText, setDownText] = useState("");
  const [innerText, setInnerText] = useState("");

  const innerBaseProps = { fontSize, depth, setLastFocused };
  const subBaseProps = {
    fontSize: fontSize / 2,
    depth: depth + 1,
    setLastFocused,
  };

  useEffect(() => {
    let tmpText = "\\int";
    if (downText.length) tmpText += "_{" + downText + "}";
    if (upText.length) tmpText += "^{" + upText + "}";
    setText(tmpText + " " + innerText);
  }, [upText, downText, innerText]);

  return (
    <div className="integral-container">
      <div className="integral" style={{ fontSize: `${fontSize}pt` }}>
        {"\u222B"}
      </div>
      <div className="integral-subscript">
        <Base {...subBaseProps} setText={setUpText}></Base>
        <Base {...subBaseProps} setText={setDownText}></Base>
      </div>
      <Base {...innerBaseProps} setText={setInnerText}></Base>
    </div>
  );
};

export default Integral;
