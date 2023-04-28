// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Get a refrence to the div with id 'root'
const el = document.getElementById("root");

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Take the react component and show it on the screen
root.render(<App /> );
