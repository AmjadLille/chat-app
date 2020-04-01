import React from "react";
import "./App.css";
import List from "./ContactList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
