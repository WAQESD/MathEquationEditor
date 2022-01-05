import React from "react";

const BaseInput = ({
  fontSize,
  size,
  setSize,
  depth,
  setClick,
  activeArr,
  baseInput,
  onMouseEnter,
  setText,
}) => {
  const checkEmpty = (arr) => {
    return arr.reduce((sum, e) => sum + e) ? false : true;
  };

  const getSize = (input) =>
    input.split("").reduce((sum, char) => {
      const korean =
        /[a-zA-Z!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\?0-9]/g;
      const result = korean.test(char);
      if (!result) return sum + 1.666;
      else return sum + 1;
    }, 0);

  return (
    <input
      className="base-input"
      autoFocus
      style={{
        width: `${size}ch`,
        fontSize: `${fontSize}pt`,
        margin: `${fontSize / 20}px ${fontSize / 20}px`,
      }}
      onChange={(e) => {
        setSize(
          e.target && e.target.value.length >= 1 ? getSize(e.target.value) : 1
        );
        setText(e.target.value);
      }}
      onBlur={(e) => {
        if (
          e.target.value.length == 0 &&
          depth > 0 &&
          (depth == 2 || checkEmpty(activeArr))
        ) {
          setClick(false);
        }
      }}
      onMouseEnter={onMouseEnter}
      placeholder={" "}
      ref={baseInput}
    />
  );
};

export default BaseInput;
