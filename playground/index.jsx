import React from "react";
import ReactDOMClient from "react-dom/client";
import "./main.css";
import { Demo } from "../src/index.jsx";

const App = () => {
  return (
    <div>
      <h1>Playground App</h1>
      <Demo />
    </div>
  );
};

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);
