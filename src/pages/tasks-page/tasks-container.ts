import { RootState } from "../../store/store"
import {connect} from "react-redux";
import Tasks from "../../components/tasks/Tasks";

const mapStateToProps = (state:RootState)=>{
    return {
        isGetTasksRequest: state.tasks.isRequestTasks,
        titleInput: state.tasks.titleInput,
        tasks: state.tasks.tasks
    }
}
const TasksContainer=connect(mapStateToProps)(Tasks)
export default TasksContainer