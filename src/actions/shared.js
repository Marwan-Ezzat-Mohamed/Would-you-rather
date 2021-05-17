import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

// export function handleAnswerQuestion(authedUser, qid, answer) {
//   console.log("this is the answer", answer);
//   return (dispatch) => {
//     dispatch(addAnswer(authedUser, qid, answer));
//     dispatch(addUserAnswer(authedUser, qid, answer));
//     return saveQuestionAnswer(authedUser, qid, answer);
//   };
// }
