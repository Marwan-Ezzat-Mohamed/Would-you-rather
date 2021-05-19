import React from "react";
import { connect } from "react-redux";
import LeaderBoardItem from "./LeaderBoardItem";

const LeaderBoard = (props) => {
  const { users } = props;
  const sortedUsers = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      Object.keys(b.questions).length -
      (Object.keys(a.answers).length + Object.keys(a.questions).length)
  );
  return (
    <div>
      {sortedUsers.map((user) => (
        <LeaderBoardItem key={user.id} user={user} />
      ))}
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
