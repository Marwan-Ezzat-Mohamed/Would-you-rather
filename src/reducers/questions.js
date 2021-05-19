import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../actions/questions";
import { saveQuestion } from "../utils/api";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_ANSWER:
      const votes = state[action.qid][action.answer].votes.concat([
        action.authedUser,
      ]);
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes,
          },
        },
      };
    default:
      return state;
  }
}
