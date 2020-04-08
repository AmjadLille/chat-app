import React, { Component } from "react";
import "./Contact.css";
import App from "./App";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.imageSrc} alt="avatar" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <div
              onClick={this.props.click}
              className={this.props.online ? "status-online" : "status-offline"}
            />
            <span className="status-text" onClick={this.props.click}>
              {this.props.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
