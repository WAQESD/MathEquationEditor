import React from "react";
import { MathComponent } from "mathjax-react";

const Example = ({ text }) => {
  const makeComponentArray = (textarea) => {
    return textarea
      .split("\n")
      .map((text, idx) => <MathComponent tex={text} key={idx}></MathComponent>);
  };

  return (
    <div className="container">
      <div>{makeComponentArray(text)}</div>
    </div>
  );
};

export default Example;
