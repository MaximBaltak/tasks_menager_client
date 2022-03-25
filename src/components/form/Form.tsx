import React from 'react';
import styles from './Form.module.scss'
import FormInput from "../form-input/FormInput";
import FormButton from "../form-button/FormButton";
const Form = () => {
    return <form className={styles.form}>
            <h2 className={styles.title}>Вход</h2>
        <div className={styles.wrapper}>
        <FormInput value={'#'} type='text'/>
        </div>
    <div className={styles.wrapper}>
        <FormInput value={'#'} type='password'/>
    </div>
    <div className={styles.wrapper}>
        <FormButton onClick={()=>{}} text='Войти'/>
    </div>
        <button className={styles.buttonSmall} onClick={()=>{}}>Зарегистрироваться?</button>
    </form>
};

export default Form;