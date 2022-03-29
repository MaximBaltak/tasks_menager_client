import React from 'react';
import styles from './TasksPage.module.scss'
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import TasksContainer from './tasks-container';
import {Dispatch, Selector} from "../../store/store";
import {changeTitleTask} from "../../store/slices/tasks-slice/tasks-slice";
import {add, deleteAll} from "../../utils/tasks";
const TasksPage = () => {
    const dispatch=Dispatch()
    const {titleInput}=Selector(state=>state.tasks)
    return (
        <>
         <div className={styles.title}><Title/></div>
            <input value={titleInput}
                   onChange={e=>dispatch(changeTitleTask(e.target.value))}
                   className={styles.addInput} type="text" placeholder='Название задачи'/>
            <div className={styles.controller}>
                    <Button color='#D75959' text='Отчистить' onClick={deleteAll} dispatch={dispatch}/>
                    <Button color='#051021' text='Добавить' onClick={add} dispatch={dispatch} />
            </div>
            <TasksContainer/>
        </>
    );
};

export default TasksPage;