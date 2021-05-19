import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
const NotFound = () => (
  <div>
    <h3>404 page not found</h3>
    <p> the page you are looking for does not exist.</p>
  </div>
);

export default withRouter(connect()(NotFound));
