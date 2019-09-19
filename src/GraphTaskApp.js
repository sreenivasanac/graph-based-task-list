import React, { Component } from 'react';
import GraphTask from './GraphTask';
import './GraphTaskApp.css';

class GraphTaskApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphTasks: []
    };
    this.addGraphTask = this.addGraphTask.bind(this);
  }

  addGraphTask(e) {
    e.preventDefault();

    if (this._graphTaskName.value !== "") {
      var newGraphTask = {
        graphTaskName: this._graphTaskName.value,
        graphTaskUrl: this._graphTaskUrl.value
      };

      this.setState((prevState) => {
        return {
          graphTasks: prevState.graphTasks.concat(newGraphTask)
        };
      });

      this._graphTaskName.value = "";
      this._graphTaskUrl.value = "";

      console.log(this.state.graphTasks);
    }
  }

  render() {
    return (
      <div className="GraphTaskAppMain">
        <div className="header">
          <GraphTask graphTaskEntries={this.state.graphTasks}/>
          <form onSubmit={this.addGraphTask}>
            <input className="graph-task-input" ref={(a) => this._graphTaskName = a} placeholder="Task Name"/>
            <input className="graph-task-input" ref={(a) => this._graphTaskUrl = a} placeholder="Task Url"/>
            <button type="submit"> + </button>
          </form>
        </div>


      </div>
    );
  }
}

export default GraphTaskApp;
