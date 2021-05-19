import React, { Component } from "react";

import {  TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { withRouter, Redirect } from "react-router";

class AddQuestion extends Component {
  state = { optionOne: "", optionTwo: "" };
  handleOptionOneTextChange = (value) => {
    this.setState({ optionOne: value });
  };
  handleOptionTwoTextChange = (value) => {
    this.setState({ optionTwo: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    const { dispatch, authedUser } = this.props;
    if (!this.state.optionOne || !this.state.optionTwo) {
      return alert("Please fill all the fields");
    }
    dispatch(
      handleAddQuestion(authedUser, this.state.optionOne, this.state.optionTwo)
    );

    alert("question added!");
  };
  render() {
    return (
      <div style={{ margin: "auto", padding: 16, width: 600 }}>
        <div
          className="card shadow-lg p-3 mb-5  rounded mt-3"
          style={{
            maxWidth: "auto",
            margin: "auto",
            backgroundColor: "#F4F4F8",
          }}
        >
          <div>Would you rather...</div>
          <TextField
            name="optionOne"
            fullWidth
            value={this.state.optionOne}
            label="Enter the first option"
            onChange={(e) => this.handleOptionOneTextChange(e.target.value)}
          />
          <div style={{ marginTop: "30px" }}>OR</div>
          <TextField
            name="optionOne"
            fullWidth
            value={this.state.optionTwo}
            label="Enter the first option"
            onChange={(e) => this.handleOptionTwoTextChange(e.target.value)}
          />

          <button
            className="btn btn-primary mt-3"
            style={{ margin: "auto" }}
            onClick={(e) => this.handleSubmit(e)}
          >
            submit
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default withRouter(connect(mapStateToProps)(AddQuestion));
