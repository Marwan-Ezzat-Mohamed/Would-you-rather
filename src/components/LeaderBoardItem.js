import React from "react";
import { connect } from "react-redux";

const LeaderBoardItem = (props) => {
  const { user } = props;

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
        <div style={{ color: "#FE4A49" }}>
          Total Score:
          {Object.keys(user.answers).length + user.questions.length}
        </div>

        <div className="mt-3" style={{ color: "#009FB7" }}>
          Number of answered questions: {Object.keys(user.answers).length}
        </div>
        <div style={{ color: "#009FB7" }}>
          {" "}
          Number of created questions: {user.questions.length}
        </div>
      </div>
    </div>
  );
};

export default connect()(LeaderBoardItem);
