import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.imageSrc} alt="avatar" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div
            className="status"
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <span className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
