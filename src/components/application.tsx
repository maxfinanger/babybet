import React from "react";
import Menubar from "./menubar/Menubar";
import "./application.css";
import CurrentDate from "./dates/currentDate";

function Application() {
  return (
    <>
      <Menubar />
      <main className="container">
        <CurrentDate />
      </main>
    </>
  );
}

export default Application;
