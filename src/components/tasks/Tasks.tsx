import React from 'react';
import styles from './Tasks.module.scss'
import Task from "./task/Task";
const Tasks = () => {

    return (
        <ul className={styles.list}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </ul>
    );
};

export default Tasks;