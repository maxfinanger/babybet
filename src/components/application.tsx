import React, { useState } from "react";
import Menubar from "./menubar/Menubar";
import "./application.css";
import CurrentDate from "./dates/currentDate";
import ChampagneAPI from "./api/champagneAPI";

function Application() {
  const [currentView, setCurrentView] = useState("home");

  const handleMenuClick = (view: React.SetStateAction<string>) => {
    setCurrentView(view);
  };

  return (
    <>
      <Menubar onMenuClick={handleMenuClick} />
      <main className="container">
        {currentView === "home" && <CurrentDate />}
        {currentView === "champagnes" && <ChampagneAPI />}
      </main>
    </>
  );
}

export default Application;
