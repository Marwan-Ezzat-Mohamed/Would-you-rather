import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeAuthedUser } from "./../actions/authedUser";
class NavBar extends Component {
  state = {};

  render() {
    const { authedUser, dispatch } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Welcome {authedUser}!
        </Link>

        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active"></li>
            <li className="nav-item">
              <Link to="/leaderboard" className="nav-link">
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add poll
              </Link>
            </li>
            <li className="nav-item">
              <p
                onClick={() => dispatch(removeAuthedUser())}
                className="nav-link"
              >
                logout
              </p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
