import React, { Component } from "react";
import { getTasks, saveTasks } from "./api"; // funciones de API para obtener y guardar tareas
import '../styles/TaskList.scss';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    componentDidMount() {
        getTasks()
            .then((tasks) => this.setState({ tasks }))
            .catch((error) => console.error(error));
    }

    addTask = (newTask) => {
        const updatedTasks = [...this.state.tasks, newTask];
        this.setState({ tasks: updatedTasks });
        saveTasks(updatedTasks).catch((error) => console.error(error));
    };

    deleteTask = (taskId) => {
        const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
        this.setState({ tasks: updatedTasks });
        saveTasks(updatedTasks).catch((error) => console.error(error));
    };

    render() {
        return (
            <div>
                <h2>Task List</h2>
                <ul>
                    {this.state.tasks.map((task) => (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <AddTaskForm onSubmit={this.addTask} />
            </div>
        );
    }
}

export default TaskList;
