import React from "react";
import ThreeScene from "./component/ThreeScene";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "felx",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <h1>React with ThreeJS</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      <ThreeScene />
    </div>
  );
}

export default App;
