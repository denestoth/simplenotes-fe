import React from 'react';
import TaskService from '../service/TaskService';
import NewTask from '../domain/NewTask';
import TaskListComponent from './TaskListComponent';

class TaskCreateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            tags: []
        };
    }

    handleTitleFieldChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleTextFieldChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleTagsFieldChange = (event) => {
        this.setState({tags: event.target.value.split(",")});
    }

    handleSubmit = (event) => {
        TaskService.createTask(new NewTask(this.state.title, this.state.text, this.state.tags)).then(TaskListComponent.render());
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label class = 'form-label'>Title</label>
                    <input type = 'text' class = 'form-control' onChange={this.handleTitleFieldChange} required />
                    <label class='form-label'>Text</label>
                    <textarea class = 'form-control' onChange={this.handleTextFieldChange} required />
                    <label class = 'form-label'>Tags</label>
                    <input type = 'text' class = 'form-control' onChange={this.handleTagsFieldChange} />
                    <button>Save</button>
                </form>
            </div>
        );
    }

}

export default TaskCreateComponent;