import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import QuestionsPage from "./components/QuestionPage";
import AddQuestion from "./components/AddQuestion";
import LeaderBoard from "./components/LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {authedUser ? (
          <BrowserRouter>
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/question/:id" exact component={QuestionsPage} />
            <Route path="/add" exact component={AddQuestion} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            {/* <Route path="/login" exact component={Login} /> */}
          </BrowserRouter>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
