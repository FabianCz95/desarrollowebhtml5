import React, {Component} from 'react';
import '../App.css'

export default class TaskForm extends Component { 

    state = {
        title: '',
        description:''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
            <br></br>
            <h2>Write a Task!</h2> 
            <form onSubmit={this.onSubmit}>
                <input
                type="text"
                name="title" 
                placeholder="Write a Task!" 
                onChange={this.onChange}
                className="InputBox"
                value={this.state.title}/>
                <br/>
                <h2>Describe the Task</h2>
                <textarea 
                name="description" 
                placeholder="Describe the Task" 
                onChange={this.onChange}
                value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <input type="submit" value="Add Task"/>
            </form>
            </div>
        )
    }
}