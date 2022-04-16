import axiosConfig from "./../../axios.config"
import {IAddTaskBody, ITasksRequests} from "./types";
class TasksRequests implements ITasksRequests{

    addTask(body: IAddTaskBody): Promise<any> {
        return axiosConfig.post('tasks', body);
    }

    deleteTaskOrTasks(query?: number): Promise<any> {

        return axiosConfig.delete(`tasks?id=${query || ''}`);
    }

    getTasks(): Promise<any> {
        return axiosConfig.get('tasks');
    }

    updateTask(body: IAddTaskBody): Promise<any> {
        return axiosConfig.put('tasks', body);
    }

}
export default new TasksRequests()