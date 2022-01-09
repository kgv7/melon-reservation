// import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import MakeAppointment from "./MakeAppointment";
import ScheduledAppointment from "./ScheduledAppointment";


export default function App() {

  const token = sessionStorage.getItem("token")
  
  if (token) {
    return (

    <React.Fragment>
    <BrowserRouter>
      <Navbar logo="" brand="Melon Reservation"/>
      <div className="main-container-fluid">

      <Switch>
          
          <Route exact path="/make-appointment" component={MakeAppointment} />

          <Route exact path="/appointment-list" component={ScheduledAppointment} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.Fragment>

  );
} else {
  return(
    <React.Fragment>
      <BrowserRouter>
        <div className="main-container-fluid">
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )
}
}

