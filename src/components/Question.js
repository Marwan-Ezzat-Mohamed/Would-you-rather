import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Question = (props) => {
  const { questions, users, id } = props;
  const question = questions[id];
  const user = users[questions[id].author];
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded">
      <img
        className="card-img-top"
        src={user.avatarURL}
        alt={`  ${user} `}
        style={{ width: "auto", height: "280px" }}
      />
      <div className="card-body">
        <div>{user.name} asks..</div>
        <div>Would you rather...</div>
        <div className="card-title">{question.optionOne.text} </div>
        <div>OR</div>
        <div className="card-title">{question.optionTwo.text} </div>

        <Link to={`/question/${id}`}>
          <button className="btn btn-primary text-center">Choose</button>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  };
}

export default connect(mapStateToProps)(Question);
