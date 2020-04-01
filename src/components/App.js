import React from "react";
import "./App.css";
import DisplayList from "./ContactList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DisplayList />
      </div>
    );
  }
}

export default App;
