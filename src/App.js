import React from 'react';
import './App.css';
import Counter from "./Counter"
import CountContextComponent from "./context/CountContext"
import AuthContextComponent from "./context/AuthContext"

import Navbar from "./components/Navbar"
import Login from "./components/Login"
import User from "./components/Users"



function App() {
  return (
    <div className="App">
      <AuthContextComponent>
        <CountContextComponent>
          <Navbar />
          <Login />
          <Counter />
          <br />
          <User />
        </CountContextComponent>
      </AuthContextComponent>
    </div>
  );
}



export default App;
