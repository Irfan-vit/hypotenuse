import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [output, setOutput] = useState("");
  var [side1, setSide1] = useState("");
  var [side2, setSide2] = useState("");
  function angle2InputHandler(event) {
    var val1 = Math.pow(event.target.value, 2);
    side1 = val1;
    setSide1(side1);
  }
  function angle3InputHandler(event) {
    var val2 = Math.pow(event.target.value, 2);
    side2 = val2;
    setSide2(side2);
  }
  function ClickHandler() {
    output = Math.sqrt(side1 + side2);
    setOutput(output);
  }
  return (
    <div className="App">
      <div>
        <h1>Check Triangle Is Valid</h1>
        <input type="number" onChange={angle2InputHandler} />
        <input type="number" onChange={angle3InputHandler} />
        <button
          onClick={() => {
            ClickHandler();
          }}
        >
          calculate
        </button>
        <h1>{output}</h1>
      </div>
    </div>
  );
}
