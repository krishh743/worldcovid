import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Services from './components/Services';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'
// import {Switch, Route} from "react-router-dom";
import {Routes,Route} from "react-router-dom";


function App() {
// var num=27;
// var num2=3;
// var total=num+num2;
// console.log(total);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>

    </div>
  );
}

export default App;
