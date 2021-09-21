import axios from 'axios'

const TASKS_URL = 'http://localhost:8080/task/';
const headers = { "Content-Type": "application/json" };

class TaskService{

    getTasks() {
        try {
            return axios.get(TASKS_URL, {headers});
        } catch (error) {
            console.log(error);
        }
    }

    createTask(data) {
        try {
            return axios.post(TASKS_URL, data, {headers});
        } catch (error) {
            console.log(error);
        }
    }

    deleteTask(id) {
        try {
            return axios.delete(TASKS_URL+id, {headers});
        } catch (error) {
            console.log(error);
        }
    }
}

export default new TaskService()