import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImportFromFileBody from "./components/ImportFromFileBody";
import RequestReport from "./components/RequestReport";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Driveline Assessment Generator</h1>
        </header>
        <body>
          <div id="main">
            <ImportFromFileBody />
            <RequestReport />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
