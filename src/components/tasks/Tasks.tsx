import React from 'react';
import styles from './Tasks.module.scss'
import Task from "./task/Task";
import {ITask} from "../../store/slices/tasks-slice/types";
interface IProps{
    titleInput:string,
    tasks:ITask[],
}
const Tasks: React.FC<IProps> = ({titleInput,tasks}) => {

    return (
        <ul className={styles.list}>
            {tasks.map(task=><Task key={task.id} task={task}/>)}
        </ul>
    );
};

export default Tasks;