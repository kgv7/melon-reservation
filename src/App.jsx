// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import MakeAppointment from "./MakeAppointment";
import ScheduledAppointment from "./ScheduledAppointment";


export default function App() {
  return (

    <React.Fragment>
    <BrowserRouter>
      <Navbar logo="" brand="Melon Reservation"/>
      <div className="main-container-fluid">

        <Routes>
 
          <Route exact path="/" element={<Login />} />
          
          <Route exact path="/make-appointment" element={<MakeAppointment />} />

          <Route exact path="/appointment-list" element={<ScheduledAppointment />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.Fragment>

  );
}
