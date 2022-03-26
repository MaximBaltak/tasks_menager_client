import React from 'react';
import styles from './Task.module.scss'
import svgIcons from './../../../img/icons.svg'
const Task = () => {
    return (
        <div className={styles.task}>
            <div >
                <input className={styles.input}
                       type="checkbox" id='input-checkbox'/>
                <label className={styles.userCheckbox} htmlFor='input-checkbox'/>
            </div>
            <h2 className={styles.title}>Задача 1</h2>
            <button className={styles.delete}>
                <svg width={16} height={16}>
                    <use xlinkHref={`${svgIcons}#delete`}/>
                </svg>
            </button>
        </div>
    );
};

export default Task;