import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CssBaseline, TextField } from "@material-ui/core";
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
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Would you rather...
            </Typography>
            <TextField
              name="optionOne"
              fullWidth
              value={this.state.optionOne}
              label="Enter the first option"
              onChange={(e) => this.handleOptionOneTextChange(e.target.value)}
            />
            <Typography style={{ marginTop: "30px" }}>OR</Typography>
            <TextField
              name="optionOne"
              fullWidth
              value={this.state.optionTwo}
              label="Enter the first option"
              onChange={(e) => this.handleOptionTwoTextChange(e.target.value)}
            />
          </CardContent>

          <CardActions>
            <button
              className="btn btn-primary"
              style={{ margin: "auto" }}
              onClick={(e) => this.handleSubmit(e)}
            >
              submit
            </button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default withRouter(connect(mapStateToProps)(AddQuestion));
