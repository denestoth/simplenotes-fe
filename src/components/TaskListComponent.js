import React from 'react';
import TaskService from '../service/TaskService.js';
import Task from '../domain/Task.js';

class TaskListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks:[]
        }
    }

    componentDidMount() {
        TaskService.getTasks().then((response) => {
            const taskList = response.data.map(function(obj) {
                return new Task(obj.id, obj.title, obj.text, obj.status, obj.notes, obj.tags.join(','), obj.createdAt, obj.modifiedAt);
            });

            this.setState({tasks: taskList});
        });
    }

    deleteTask = (event) => {
        TaskService.deleteTask(event.target.value)
        .then(this.render());
    }

    render () {
        return (
            <div>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>title</td>
                            <td>text</td>
                            <td>status</td>
                            <td>notes</td>
                            <td>tags</td>
                            <td>created at</td>
                            <td>modified at</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(
                                task =>
                                <tr key = {task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.text}</td>
                                    <td>{task.status}</td>
                                    <td>{task.notes}</td>
                                    <td>{task.tags}</td>
                                    <td>{task.createdAt}</td>
                                    <td>{task.modifiedAt}</td>
                                    <td> <button onClick={this.deleteTask} value={task.id}>Delete</button> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskListComponent