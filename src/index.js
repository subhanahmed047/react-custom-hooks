import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Posts from "./components/posts";

function App() {
  return <Posts />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
