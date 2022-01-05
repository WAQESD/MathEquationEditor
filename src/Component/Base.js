import React, { useState, useEffect, useRef } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

const Base = ({ fontSize, depth, setText, setClick }) => {
  const [size, setSize] = useState(1);
  const [upSubscript, setUpSubscript] = useState("");
  const [downSubscript, setDownSubscript] = useState("");
  const [input, setInput] = useState("");
  const [activeArr, setActiveArr] = useState([0, 0]);
  const [buttonStyle, setButtonStyle] = useState({
    display: "",
    opacity: "0%",
  });
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
  };

  return (
    <>
      {depth < 2 ? (
        <div className="base-container" onMouseLeave={() => setButtonDisplay()}>
          <BaseInput {...inputProps} setText={setInput} />
          <div className="button-wrapper">
            <BaseButton
              {...buttonProps}
              pos={0}
              buttonStyle={buttonStyle}
              setText={setUpSubscript}
            />
            <BaseButton
              {...buttonProps}
              pos={1}
              buttonStyle={buttonStyle}
              setText={setDownSubscript}
            />
          </div>
        </div>
      ) : (
        <div className="base-container">
          <BaseInput {...inputProps} />
        </div>
      )}
    </>
  );
};

export default Base;
