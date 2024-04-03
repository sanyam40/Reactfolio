import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled","Success");
      document.title="TextEditor - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","Success");
      document.title="TextEditor - Light Mode";
    }

  };

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }

  return (
    <>
    <Router>
      <Navbar
        title="TextEditor"
        option1="about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/" element={<TextForm />} />
          <Route exact path="/textEditor" element={<TextForm />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
