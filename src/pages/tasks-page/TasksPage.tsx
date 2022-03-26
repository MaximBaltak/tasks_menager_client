import React from 'react';
import styles from './TasksPage.module.scss'
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Tasks from "../../components/tasks/Tasks";
const TasksPage = () => {
    return (
        <>
         <div className={styles.title}><Title/></div>
            <input className={styles.addInput} type="text" placeholder='Название задачи'/>
            <div className={styles.controller}>
                    <Button color='#D75959' text='Отчистить' onClick={()=>{}}/>
                    <Button color='#051021' text='Добавить' onClick={()=>{}}/>
            </div>
            <Tasks/>
        </>
    );
};

export default TasksPage;