import React, { Component } from "react";
import { BrowserRouter, Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import LoadingBar from "react-redux-loading-bar";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import QuestionsPage from "./components/QuestionPage";
import AddQuestion from "./components/AddQuestion";
import LeaderBoard from "./components/LeaderBoard";
import NotFound from "./components/NotFound";
import { Switch } from "react-router";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        <LoadingBar />
        {authedUser ? (
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/question/:id" exact component={QuestionsPage} />
              <Route path="/add" exact component={AddQuestion} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/login" exact component={Login} />
              <Route path="/not-found" exact component={NotFound} />
              <Route render={() => (<Redirect to="/not-found" />)}/>
            </Switch>
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
    loading: authedUser === null,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
