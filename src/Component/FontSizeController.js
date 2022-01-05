import React from "react";

const FontSizeController = ({ setFontSize }) => {
  return (
    <div className="font-size">
      <label className="font-size-label">Font Size</label>
      <input
        type="range"
        className="font-size-controller"
        min={32}
        max={80}
        step={4}
        onChange={(e) => {
          setFontSize(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default FontSizeController;
