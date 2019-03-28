import React from "react";
import { connect } from "react-redux";
import Task from "../../components/task";

class TaskList extends React.Component {
  render() {
    let todo = this.props.tasks;
    let filter = this.props.filter;
    let filteredState = { todo: [], filter: "" };

    if (filter === "ACTIVE_FILTER") {
      filteredState.todo = todo.filter(state => !state.isCompleted);
      filteredState.filter = filter;
      console.log(filteredState);
    }

    if (filter === "DONE_FILTER") {
      filteredState.todo = todo.filter(state => state.isCompleted);
      filteredState.filter = filter;
      console.log(filteredState);
    }

    if (filter === "ALL_FILTER" || filter === "") {
      filteredState.todo = todo;
      filteredState.filter = filter;
      console.log(filteredState);
    }
    console.log(this.props);
    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredState.todo.map((task, index) => (
            <Task key={index} task={task} id={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.todo, filter: state.filter };
}

export default connect(mapStateToProps)(TaskList);
