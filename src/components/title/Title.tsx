import React from 'react';
import styles from './Title.module.scss'
const Title = () => <h1 className={styles.title}>
    <span className={styles.spanColor1}>Менеджер</span> <span className={styles.spanColor2}>Задач</span>
</h1>

export default Title;