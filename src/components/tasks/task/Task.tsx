import React from 'react';
import styles from './Task.module.scss'
import svgIcons from './../../../img/icons.svg'
import {ITask} from "../../../store/slices/tasks-slice/types";
import {Dispatch} from "../../../store/store";
import {deleteId, update} from "../../../utils/tasks";

interface IProps {
    task: ITask
}

const Task: React.FC<IProps> = ({task}) => {
    const dispatch = Dispatch()
    return (
        <div className={styles.task}>
            <div>
                <input className={styles.input}
                       type="checkbox"
                       checked={task.done}
                       onChange={() => update(task.id, dispatch)}
                       id={task.id.toString()}/>
                <label className={styles.userCheckbox} htmlFor={task.id.toString()}/>
            </div>
            <h2 style={{textDecoration: task.done ? 'line-through' : 'none'}} className={styles.title}>{task.title}</h2>
            <button onClick={() => deleteId(task.id, dispatch)} className={styles.delete}>
                <svg width={16} height={16}>
                    <use xlinkHref={`${svgIcons}#delete`}/>
                </svg>
            </button>
        </div>
    );
};

export default Task;