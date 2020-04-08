import React, { Component } from "react";
import "./App.css";
import Contact from "./Contact";

class App extends Component {
  state = {
    online: true
  };

  switchStatusHandler = () => {
    this.setState({ online: !this.state.online });
  };
  render() {
    return (
      <div className="App">
        <Contact
          name="Jad Harvey"
          imageSrc="https://randomuser.me/api/portraits/med/men/75.jpg"
          online={this.state.online}
          click={this.switchStatusHandler}
        />
        <Contact
          name="Cindy Craig"
          imageSrc="https://randomuser.me/api/portraits/women/96.jpg"
          online={this.state.online}
          click={this.switchStatusHandler}
        />
        <Contact
          name="Elaine Montgomery"
          imageSrc="https://randomuser.me/api/portraits/women/24.jpg"
          online={this.state.online}
          click={this.switchStatusHandler}
        />
      </div>
    );
  }
}

export default App;
