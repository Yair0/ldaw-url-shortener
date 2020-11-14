import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddUrl from "./Components/AddUrl";
import ShorterUrl from "./Components/ShorterUrl";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <AddUrl />
          </Route>
          <Route exact path="/:url_shortened">
            <ShorterUrl />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
