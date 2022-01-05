import "./App.css";
import Example from "./Component/Example";
import Base from "./Component/Base";
import Title from "./Component/Title";
import Latex from "./Component/Latex";
import React, { useState } from "react";
import Equal from "./Component/Equal";

function App() {
  const [text, setText] = useState("=");
  const [fontSize, setFontSize] = useState(52);

  return (
    <div className="App">
      <div className="container">
        <Title setFontSize={setFontSize} />
        <div className="editor-container">
          <Equal
            text={text}
            setText={setText}
            fontSize={fontSize}
            depth={0}
          ></Equal>
        </div>
        <div className="result-container">
          <Example text={text} fontSize={fontSize}></Example>
        </div>
        <div className="latex-container">
          <Latex text={text} fontSize={fontSize}></Latex>
        </div>
      </div>
    </div>
  );
}

export default App;
