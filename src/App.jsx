import React from "react";
import "./layout.scss";
import Navbar from "./components/navbar/navbar";
import HomePage from "./routes/homePage";

function App() {
  return (
    <>
      <div className="layout">
        <div className="nav">
          <Navbar />
        </div>
        <main className="content">
          <HomePage/>
        </main>
      </div>
    </>
  );
}

export default App;
