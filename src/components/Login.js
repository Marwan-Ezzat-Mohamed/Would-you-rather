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
      <div
        className="card shadow-lg p-3 mb-5  rounded mt-6"
        style={{ width: "40%", margin: "auto", marginTop: "100px" }}
      >
        <h1 className="h3 mb-3 font-weight-normal">
          Please sign choose an account to login
        </h1>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={this.handleChange}
          defaultValue="default"
        >
          <option value="default">Choose a user</option>
          {Object.keys(users).map((user) => (
            <option key={users[user].id} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button
          className="btn  btn-primary mt-3 "
          style={{ width: "20%", margin: "auto" }}
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
