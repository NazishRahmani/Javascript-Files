import React from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const navigate = useNavigate();
  return (
    <div> 
      <p>This is Main Page</p>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={ <div>Page Not Found 404</div> }></Route>
      </Routes>
      <button onClick={()=>navigate("/About")}>Go to About</button>
      <button onClick={()=>navigate("/Contact")}>Go to Contact</button>
    </div>
  );
};

export default App;
