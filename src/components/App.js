import React from "react";
import "./App.css";
import Contact from "./Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contact
          name="Jad Harvey"
          imageSrc="https://randomuser.me/api/portraits/med/men/75.jpg"
          online={true}
        />
        <Contact
          name="Cindy Craig"
          imageSrc="https://randomuser.me/api/portraits/women/96.jpg"
          online={false}
        />
        <Contact
          name="Elaine Montgomery"
          imageSrc="https://randomuser.me/api/portraits/women/24.jpg"
          online={true}
        />
      </div>
    );
  }
}

export default App;
