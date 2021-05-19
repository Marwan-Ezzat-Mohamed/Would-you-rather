import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Grid from "@material-ui/core/Grid";
class Home extends Component {
  state = {
    answeredQuestions: false,
  };

  getUserQuestions = (authedUser, questions, users) => {
    let answeredQuestions = [],
      unAnsweredQuestions = [],
      userAnswers = Object.keys(users[authedUser].answers);

    if (!authedUser || !users[authedUser] || !users[authedUser].answers) {
      return {
        answeredQuestions: [],
        unAnsweredQuestions: [],
      };
    }

    answeredQuestions = Object.values(questions).filter((question) =>
      userAnswers.includes(question.id)
    );
    answeredQuestions = answeredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    );

    unAnsweredQuestions = Object.values(questions).filter(
      (question) => !userAnswers.includes(question.id)
    );
    unAnsweredQuestions = unAnsweredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    return this.state.answeredQuestions
      ? answeredQuestions
      : unAnsweredQuestions;
  };

  handleChangeQuestions = (value) => {
    const answeredQuestions = value;
    this.setState({ answeredQuestions });
  };
  render() {
    const { authedUser, questions, users } = this.props;
    const { answeredQuestions } = this.state;
    const userQuestions = this.getUserQuestions(authedUser, questions, users);

    return (
      <div style={{ padding: "3%" }}>
        <button
          style={{ margin: "1%" }}
          className="btn btn-warning"
          onClick={() => this.handleChangeQuestions(false)}
          autoFocus={answeredQuestions ? false : true}
        >
          unAnswered questions
        </button>
        <button
          style={{ margin: "1%" }}
          className="btn btn-primary"
          onClick={() => this.handleChangeQuestions(true)}
          autoFocus={answeredQuestions ? true : false}
        >
          Answered questions
        </button>
        <Grid container justify="center" spacing={4}>
          {Object.keys(userQuestions).map((question) => (
            <Grid
              key={userQuestions[question].id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Question id={userQuestions[question].id} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Home);
