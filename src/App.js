import React from "react";
import Header from "./Header";
import Reccomend from "./Recommend";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Reccomend />
            </div>
          </Route>

          {/* <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Reccomend />
            </div>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}
