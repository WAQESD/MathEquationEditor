import React, { useState, useEffect, useRef } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import Changable from "./Changable";

const Base = ({ fontSize, depth, setText, setClick, setLastFocused }) => {
  const [size, setSize] = useState(1);
  const [upSubscript, setUpSubscript] = useState("");
  const [downSubscript, setDownSubscript] = useState("");
  const [input, setInput] = useState("");
  const [activeArr, setActiveArr] = useState([0, 0]);
  const [buttonStyle, setButtonStyle] = useState({
    display: "",
    opacity: "0%",
  });
  const [change, setChange] = useState("");
  const baseInput = useRef();

  const focusInput = () => {
    baseInput.current.focus();
  };

  const onMouseEnter = () => {
    setButtonStyle({ display: "", opacity: "" });
  };

  const setButtonDisplay = () => {
    let newButtonStyle = {
      display: "",
      opacity: "0%",
    };
    newButtonStyle.display = activeArr[0] || activeArr[1] ? "" : "none";
    setButtonStyle(newButtonStyle);
  };

  useEffect(() => {
    setButtonDisplay();
  }, [activeArr]);

  useEffect(() => {
    let newText = "";
    if (input) newText += input;
    if (downSubscript) newText += "_{" + downSubscript + "}";
    if (upSubscript) newText += "^{" + upSubscript + "}";
    setText(newText);
  }, [input, downSubscript, upSubscript]);

  const buttonProps = {
    fontSize,
    depth,
    focusInput,
    activeArr,
    setActiveArr,
    buttonStyle,
    setLastFocused,
    onMouseEnter,
  };

  const inputProps = {
    fontSize,
    size,
    depth,
    setSize,
    buttonProps,
    setClick,
    activeArr,
    baseInput,
    onMouseEnter,
    setText: setInput,
    setLastFocused: () => {
      setLastFocused({ setChange });
    },
  };

  const changableProps = {
    change,
    fontSize,
    depth,
    setText,
    setLastFocused,
    setClick,
  };

  return (
    <>
      {change == "" ? (
        depth < 2 ? (
          <div
            className="base-container"
            onMouseLeave={() => setButtonDisplay()}
          >
            <BaseInput {...inputProps} />
            <div className="button-wrapper">
              <BaseButton {...buttonProps} pos={0} setText={setUpSubscript} />
              <BaseButton {...buttonProps} pos={1} setText={setDownSubscript} />
            </div>
          </div>
        ) : (
          <div className="base-container">
            <BaseInput {...inputProps} />
          </div>
        )
      ) : (
        <Changable {...changableProps}></Changable>
      )}
    </>
  );
};

export default Base;
