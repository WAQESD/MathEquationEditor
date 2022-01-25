import React, { useState, useEffect } from "react";
import Base from "./Base";

const Equal = ({ setText, fontSize, depth, setClick, setLastFocused }) => {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [activeArr, setActiveArr] = useState([0, 0]);

  const setClickEqual = (bool, pos) => {
    let tmpArr = activeArr.slice();
    console.log(tmpArr);
    tmpArr[pos] = bool ? 1 : 0;
    console.log(tmpArr);
    setActiveArr(tmpArr);
    if ((depth > 0 && tmpArr[0] == 0 && tmpArr[1] == 0) || depth > 2)
      setClick(false);
  };

  useEffect(() => {
    setText(leftText + "=" + rightText);
  }, [leftText, rightText]);

  const baseProps = { fontSize, depth, setLastFocused };

  return (
    <div className="equal-wrapper">
      <Base
        {...baseProps}
        setText={setLeftText}
        setClick={(bool) => setClickEqual(bool, 0)}
      ></Base>
      <div
        className="equal"
        style={{
          fontSize: `${fontSize}pt`,
          margin: `0px ${fontSize / 10}px`,
        }}
      >
        =
      </div>
      <Base
        {...baseProps}
        setText={setRightText}
        setClick={(bool) => setClickEqual(bool, 1)}
      ></Base>
    </div>
  );
};

export default Equal;
