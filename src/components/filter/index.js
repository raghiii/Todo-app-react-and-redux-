import React from "react";
import store from "../../reducers";
import { allFilter } from "../../actions/";
import { activeFilter, doneFilter } from "../../actions/";

export default class Filter extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <button
            onClick={() => {
              store.dispatch(allFilter());
            }}
          >
            All
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              store.dispatch(activeFilter());
            }}
          >
            Active
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              store.dispatch(doneFilter());
            }}
          >
            Completed
          </button>
        </td>
      </tr>
    );
  }
}
