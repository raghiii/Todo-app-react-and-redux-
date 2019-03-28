import React from "react";
import { bindActionCreators } from "redux";
import { deleteTask } from "../../actions/";
import { markTask } from "../../actions/";
import { connect } from "react-redux";
import store from "../../reducers";

class Task extends React.Component {
  render() {
    console.log(this.props.id);
    return (
      <tr>
        <td
          style={{
            textDecoration: this.props.task.isCompleted
              ? "line-through"
              : "none"
          }}
        >
          {this.props.task.caption}
        </td>
        <td>
          <button
            onClick={() => {
              store.dispatch(deleteTask(this.props.id));
            }}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              store.dispatch(markTask(this.props.id));
            }}
          >
            Mark as done
          </button>
        </td>
      </tr>
    );
  }
}

export default Task;
