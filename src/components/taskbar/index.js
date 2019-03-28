import React from "react";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../../actions/";
//import store from "../../reducers";

class TaskBar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="Add ur todos here..." />
        <button onClick={this.sum.bind(this)}> Add Task </button>
      </div>
    );
  }

  sum = event => {
    this.props.add(event.target.parentElement.childNodes[0].value);
    event.target.parentElement.childNodes[0].value = "";
  };
}

//export default TaskBar;

function mapDispatchToProps(dispatch) {
  //return bindActionCreators({ addTask }, dispatch);
  return {
    add: e => dispatch(addTask(e))
  };
}

export default connect(
  () => {},
  mapDispatchToProps
)(TaskBar);
