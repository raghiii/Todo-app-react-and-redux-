import { createStore } from "redux";

const taskReducer = (state = { todo: [], filter: "" }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      state = {
        todo: [...state.todo, { caption: action.payload, isCompleted: false }],
        filter: state.filter
      };
      break;
    case "DELETE_TASK":
      state.todo.splice(action.id, 1);
      console.log(state);
      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
    case "MARK_TASK":
      state.todo[action.id].isCompleted = !state.todo[action.id].isCompleted;

      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
    default:
      break;
  }

  switch (action.filter) {
    case "ALL_FILTER":
      state.filter = "ALL_FILTER";
      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
    case "DONE_FILTER":
      state.filter = "DONE_FILTER";
      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
    case "ACTIVE_FILTER":
      state.filter = "ACTIVE_FILTER";
      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
    default:
      state.filter = "";
      state = {
        todo: [...state.todo],
        filter: state.filter
      };
      break;
  }

  return state;
};
let store = createStore(taskReducer);

export default store;
