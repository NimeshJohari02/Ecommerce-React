import React from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hat" component={demoHat} />
      </Switch>
    </div>
  );
}
export default App;
