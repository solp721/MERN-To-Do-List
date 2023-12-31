import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/userAuth/Signin";
import Main from "./Components/Main";
import Singup from "./Components/userAuth/Singup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Singup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
