import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (props) => {
    setText(Text.toUpperCase());
  };

  const handleLowClick = (props) => {
    setText(Text.toLowerCase());
  };

  const resetButton = () => {
    setText("");
  };

  const CopyButton = () => {
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied to Clipboard");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label for="exampleFormControlTextarea1">{props.head}</label>
          <textarea
            value={Text}
            onChange={handleOnChange}
            placeholder={Text}
            className="form-control"
            id="MyBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          For UperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          For LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={resetButton}>
          Reset
        </button>
        <button className="btn btn-primary mx-1" onClick={CopyButton}>
          Copy to ClipBoard
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} WORDS And {Text.length} characters
        </p>
      </div>
    </>
  );
}
