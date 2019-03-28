export function addTask(task) {
  return {
    type: "ADD_TASK",
    payload: task
  };
}

export function deleteTask(taskId) {
  return {
    type: "DELETE_TASK",
    id: taskId
  };
}

export function markTask(taskId) {
  return {
    type: "MARK_TASK",
    id: taskId
  };
}

export function allFilter(task) {
  return {
    filter: "ALL_FILTER",
    type: ""
  };
}

export function activeFilter() {
  return {
    filter: "ACTIVE_FILTER",
    type: ""
  };
}

export function doneFilter() {
  return {
    filter: "DONE_FILTER",
    type: ""
  };
}
