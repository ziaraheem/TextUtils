import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="Textutils"
        mode={mode}
        About="About us"
        toglemode={toglemode}
      />
      <Alert alert={alert} />

      <div className="container">
        {/* <Routes>
            <Route path="/About" element={<About />}></Route>
            <Route
              path="/"
              element={ */}
        <TextForm
          showalert={showalert}
          Heading="Enter text to analyze"
          mode={mode}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}

      <div className="container my-3"></div>
    </>
  );
}

export default App;
