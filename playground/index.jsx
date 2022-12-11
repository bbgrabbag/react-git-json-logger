import React from "react";
import ReactDOMClient from "react-dom/client";
import { GitMetadata } from "../src/index.jsx";
import metadata from "./mock-data/git-metadata.json";
import "./main.css";

const App = () => {
  return (
    <div>
      <h1>Git React JSON Logger Playground</h1>
      <GitMetadata metadata={metadata} />
    </div>
  );
};

ReactDOMClient.createRoot(document.getElementById("root")).render(<App />);
