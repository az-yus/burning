import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./css/main.css";
import Burning from "./components/app";

const project = ReactDOMClient.createRoot(document.getElementById("root"));


project.render(<Burning />)