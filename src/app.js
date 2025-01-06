import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import './App.css';



function App() {
  return(
    <div className="App-content">
      <BrowserRouter>
      <div>
        <nav className="navbar">
          <h1 className="Heading">React Blog</h1>
          <NavLink to='/' className="isActive" >
          Home
          </NavLink>{" "}
          {" "}
          <NavLink to='/blog1' className="isActive">
          React Basic
          </NavLink>{" "}
          {" "}
          <NavLink to='/blog2'className="isActive" >
          State Mangement
          </NavLink>{" "}
          {" "}
          <NavLink to='/blog3'className="isActive" >
          React Routing
          </NavLink>{" "}
          {" "}
        </nav>

        <Routes>
          <Route path="/" index element={<h1>Welcome to the Blog Home</h1>} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
