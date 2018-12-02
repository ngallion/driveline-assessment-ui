import React, { Component } from "react";
import axios from "../axios";

class RequestReport extends Component {
  state = {
    sessionIds: ""
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({ sessionIds: e.target.value });
  };

  handleClick = () => {
    axios
      .get("/report/?sessionIds=" + this.state.sessionIds)
      .then(response => this.setState({ sessionIds: "", data: response.data }));
    this.setState({ sessionIds: "" });
  };

  render() {
    const { data, sessionIds } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" onChange={this.handleChange} value={sessionIds} />
        <button type="submit" onClick={this.handleClick}>
          View Report
        </button>
        {data && (
          <div>
            <p style={{ color: "#61dafb" }}>
              Average Exit Velocity: {data.avgExitVelocity.toFixed(2)}
            </p>
            <p style={{ color: "#61dafb" }}>
              Max Exit Velocity: {data.maxExitVelocity}
            </p>
            <p style={{ color: "#61dafb" }}>GB: {data.groundBallPercentage}%</p>
            <p style={{ color: "#61dafb" }}>FB: {data.flyBallPercentage}%</p>
            <p style={{ color: "#61dafb" }}>LD: {data.lineDrivePercentage}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default RequestReport;
