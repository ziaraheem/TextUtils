import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("enter text here.");
  const handleupclick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("converted to upper case", "success");
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  const handlednclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("converted to lower case", "success");
  };
  const handletcclick = () => {
    let newText = Text.split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showalert("converted to title case", "success");
  };
  const handlectclick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("text copyed", "success");
  };
  const handleresclick = () => {
    var newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("extra spaces removed", "success");
  };
  const handlecleartext = () => {
    var newText = "";
    setText(newText);
    props.showalert("text cleard.", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        on
      >
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={onChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleupclick}>
          convert-to-upper-case
        </button>
        <button className="btn btn-success mx-2" onClick={handlednclick}>
          convert-to-lower-case
        </button>
        <button className="btn btn-success mx-2" onClick={handletcclick}>
          title-case
        </button>
        <button className="btn btn-success mx-2" onClick={handlectclick}>
          Copy-Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleresclick}>
          Remove-ext-spc
        </button>
        <button className="btn btn-success mx-2" onClick={handlecleartext}>
          clear-Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>The summry</h2>
        <p>
          {Text.split(" ").length} words , {Text.length} charecters.
        </p>
        <p>{0.008 * Text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter somthing to preview here."}</p>
      </div>
    </>
  );
}
