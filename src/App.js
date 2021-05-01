import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const demoHat = () => (
  <div>
    <h2>Hats Header </h2>
  </div>
);
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hat" component={demoHat} />
    </div>
  );
}
export default App;
