import React, { Component } from 'react';
import Task from './task'
import PropTypes from 'prop-types';

class Tasks extends Component {
    render(){
        return this.props.tasks.map(task => 
            <div>
            <Task
            task={task} 
            key={task.id} 
            deleteTask = {this.props.deleteTask}
            checkDone = {this.props.checkDone}
            />
            </div>
            )
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;