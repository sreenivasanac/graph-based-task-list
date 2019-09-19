import React, { Component } from 'react';

class GraphTask extends Component {

  createTasks(item) {
    if (item.graphTaskUrl !== "") {
      return <li><a href={item.graphTaskUrl}>{item.graphTaskName}</a></li>
    }
    else {
      return <li key={item.graphTaskName}></li>
    }
  }

  render() {
    var graphTasks = this.props.graphTaskEntries;
    var graphTaskItems = graphTasks.map(this.createTasks);

    return (
      <ul className="graphTaskItems">
          {graphTaskItems}
      </ul>
    );
  }
}

export default GraphTask;
