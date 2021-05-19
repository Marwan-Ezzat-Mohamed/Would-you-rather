import React, { Component } from "react";
import { connect } from "react-redux";
import { handleQuestionAnswer } from "../actions/shared";
class QuestionsPage extends Component {
  state = { isAnswerd: false };
  handleChoice = (option) => {
    const { dispatch, authedUser, questions, id } = this.props;
    dispatch(handleQuestionAnswer(authedUser, id, option));
    this.setState({ isAnswerd: true });
  };

  isQuestionAnswerd = () => {
    const { questions, users, id, authedUser } = this.props;
    const user = users[authedUser];
    const userAnswers = Object.keys(user.answers);
    const isAnswerd = userAnswers.find((e) => e === id) ? true : false;
    this.setState({ isAnswerd });
  };

  componentDidMount() {
    this.isQuestionAnswerd();
  }

  renderUnAnswredQuestion = () => {
    const { questions, users, id } = this.props;
    const question = questions[id];
    if (!question) return <h1> Question with the given id was not found</h1>;
    const user = users[questions[id].author];
    return (
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "30%", margin: "auto" }}
      >
        <img
          className="card-img-top"
          src={user.avatarURL}
          alt={`  ${user} `}
          style={{ width: "auto" }}
        />
        <div className="card-body" style={{ margin: "auto" }}>
          <div>{user.name} asks..</div>
          <div>Would you rather...</div>
          <button
            className="btn btn-primary"
            onClick={() => this.handleChoice("optionOne")}
          >
            {question.optionOne.text}{" "}
          </button>
          <div>OR</div>
          <button
            className="btn btn-primary"
            onClick={() => this.handleChoice("optionTwo")}
          >
            {question.optionTwo.text}
          </button>
        </div>
      </div>
    );
  };
  renderAnswredQuestion = () => {
    const { questions, users, id } = this.props;
    const totalUsers = Object.keys(users).length;
    const question = questions[id];
    const optionOneVotePercentage = (
      (question["optionOne"].votes.length / totalUsers) *
      100
    ).toFixed(1);
    const optionTwoVotePercentage = (
      (question["optionTwo"].votes.length / totalUsers) *
      100
    ).toFixed(1);

    if (!question) return <h1> Question with the given id was not found</h1>;
    const user = users[questions[id].author];
    const userAnswer = questions[id][user.answers[id]].text;

    return (
      <div
        className="card shadow-lg p-3 mb-5  rounded mt-3"
        style={{ maxWidth: "30%", margin: "auto", backgroundColor: "#F4F4F8" }}
      >
        <div style={{ margin: "auto" }}>{user.name}</div>
        <img
          className="card-img-top"
          src={user.avatarURL}
          alt={`  ${user} `}
          style={{ width: "80%", margin: "auto" }}
        />
        <div className="card-body" style={{ margin: "auto" }}>
          <div>Would you rather...</div>
          <div className="mt-3" style={{color:"#531CB3"}}>your answer: {userAnswer}</div>
          <div className="mt-3" style={{ color: "#009FB7" }}>
            {" "}
            {optionOneVotePercentage}% choose {question.optionOne.text}
          </div>
          <div> {question["optionOne"].votes.length} votes</div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                padding: 6,
                backgroundColor: "#FE4A49",
                border: "none",
                color: "black",
                borderRadius: "20px",
                width: `${optionOneVotePercentage}%`,
              }}
            ></div>
          </div>

          <div className="mt-3" style={{ color: "#009FB7" }}>
            {" "}
            {optionTwoVotePercentage}% choose {question.optionTwo.text}
          </div>
          <div> {question["optionTwo"].votes.length} votes</div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                padding: 6,
                backgroundColor: "#FE4A49",
                border: "none",
                color: "black",
                borderRadius: "20px",
                width: `${optionTwoVotePercentage}%`,
              }}
            ></div>
          </div>
          
        </div>
      </div>
    );
  };

  render() {
    return this.state.isAnswerd
      ? this.renderAnswredQuestion()
      : this.renderUnAnswredQuestion();
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  return {
    id,
    users,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(QuestionsPage);
