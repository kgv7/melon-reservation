import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Navbar from "./Navbar";
import MakeAppointment from "./MakeAppointment";
import ScheduledAppointment from "./ScheduledAppointment";


export default function App() {
  return (

    <React.Fragment>
    <BrowserRouter>
      <Navbar logo={logo} brand="Melon Reservation"/>
      <div className="main-container-fluid">

        <Routes>
 
          <Route exact path="/" component={Login} />
          
          <Route exact path="/make-appointment" component={MakeAppointment} />

          <Route exact path="/appointment-list" component={ScheduledAppointment} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.Fragment>

  );
}
