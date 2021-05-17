import React, { Component } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  state = { user: null };
  handleChange = (e) => {
    e.preventDefault();
    const user = e.target.value;
    this.setState({ user });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.user) alert("Please choose a user before logging in");
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.user));
    return <Redirect to="/" />;
  };
  render() {
    const { users } = this.props;
    const { user } = this.state;
    console.log("users: ", users[user]);

    return (
      <div className="App">
        <h1 className="h3 mb-3 font-weight-normal">
          Please sign choose an account to login
        </h1>
        <select
          classNmae="form-select"
          aria-label="Default select example"
          onChange={this.handleChange}
        >
          <option selected>Choose a user</option>
          {Object.keys(users).map((user) => (
            <option value={user}>{user}</option>
          ))}
        </select>

        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Sign in
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
