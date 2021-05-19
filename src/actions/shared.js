import { getInitialData } from "../utils/api";
import { addUserAnswer, receiveUsers } from "./users";
import { addAnswer, receiveQuestions } from "./questions";
import { saveQuestionAnswer } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer(authedUser, qid, answer).then(() => {
      //console.log(authedUser, qid, answer);
      dispatch(addAnswer(authedUser, qid, answer));
      dispatch(addUserAnswer(authedUser, qid, answer));
    });
  };
}
