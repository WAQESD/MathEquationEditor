import React, { useState, useEffect } from "react";
import Base from "./Base";

const BaseButton = ({
  fontSize,
  depth,
  setText,
  activeArr,
  setActiveArr,
  focusInput,
  pos,
  buttonStyle,
}) => {
  const [click, setClick] = useState(false);
  const checkEmpty = (arr, pos) => {
    return !arr.reduce((sum, e, idx) => {
      if (idx == pos) return sum;
      else return sum || e;
    }, false);
  };

  useEffect(() => {
    let tmpArr = activeArr ? activeArr.slice() : [0, 0, 0, 0];

    if (click) {
      tmpArr[pos] = 1;
      setActiveArr(tmpArr);
    } else {
      if (checkEmpty(activeArr, pos)) focusInput();
      tmpArr[pos] = 0;
      setActiveArr(tmpArr);
    }
  }, [click]);
  return (
    <>
      {!click ? (
        <button
          style={{
            fontSize: `${fontSize / 2.1}pt`,
            display: buttonStyle.display,
            opacity: buttonStyle.opacity,
            margin: `${fontSize / 30}px 0px`,
          }}
          className="add-button"
          onClick={(e) => {
            setClick(!click);
          }}
        >
          +
        </button>
      ) : (
        <Base
          fontSize={fontSize / 2}
          depth={depth + 1}
          setText={setText}
          setClick={setClick}
        ></Base>
      )}
    </>
  );
};

export default BaseButton;
