import React from "react";
import Equal from "./Equal";
import Integral from "./Integral";

const Changable = ({
  change,
  fontSize,
  depth,
  setClick,
  setText,
  setLastFocused,
}) => {
  const equalProps = {
    fontSize,
    depth,
    setText,
    setLastFocused,
    setClick,
  };

  let changable = <Equal {...equalProps}></Equal>;
  if (change == "equal") changable = <Equal {...equalProps}></Equal>;
  if (change == "integral") changable = <Integral {...equalProps}></Integral>;

  return <>{changable}</>;
};

export default Changable;
