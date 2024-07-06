import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./components/application";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/application.css";
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Application />);
