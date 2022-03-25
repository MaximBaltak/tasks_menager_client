import React from 'react';
import styles from './Auth.module.scss'
import Form from "../form/Form";
const Auth = () => {
    return (
        <div className={styles.login}>
            <Form/>
        </div>
    );
};

export default Auth;