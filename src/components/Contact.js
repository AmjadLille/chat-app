import React from "react";
import "./Contact.css";
import App from "./App";
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render(){

    return (
      <div className="Contact">
        <img className="avatar" src={this.props.imageSrc} alt="avatar" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status">
            <div
              className={this.props.online ? "status-online" : "status-offline"}
            />
            <span className="status-text">
              {this.props.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
    imageSrc : PropTypes.string.isRequired,
  };
