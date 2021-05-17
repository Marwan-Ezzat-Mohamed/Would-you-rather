import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    const { authedUser } = this.props;
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="">
          Welcome {authedUser}!
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Home
              </Link>
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
