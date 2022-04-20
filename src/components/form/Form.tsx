import React from 'react';
import styles from './Form.module.scss'
import FormInput from "../form-input/FormInput";
import FormButton from "../form-button/FormButton";
import {formToggle, IForm} from "../../store/slices/authorization-slice/types";
import {form, onToggleForm} from "../../utils/form";
import {Dispatch, Selector} from "../../store/store";
interface IProps{
    typeForm:IForm,
    login:string,
    password:string,
    error:string
}
const Form:React.FC<IProps> = ({typeForm,
                                   login,password,error}) => {
    const auth:boolean=Selector(state=>state.authorization.auth)
    const dispatch=Dispatch()
    return <form className={styles.form}>
        {typeForm===formToggle.EXIT|| auth? <FormButton
                onClick={e=>form(formToggle.EXIT,dispatch,e)} text='Выйти'/>:
        typeForm===formToggle.SIGN_UP?
            <>
            <h2 className={styles.title}>Рагистрация</h2>
            <div className={styles.wrapper}>
            <FormInput value={login} type='text'/>
            </div>
            <div className={styles.wrapper}>
            <FormInput value={password} type='password'/>
            </div>
            <div className={styles.wrapper}>
            <FormButton
                onClick={e=>form(formToggle.SIGN_UP,dispatch,e)}
                text='Зарегистрироваться'/>
            </div>
            <button className={styles.buttonSmall}
                    onClick={e=>onToggleForm(formToggle.SIGN_IN, dispatch,e)}>Войти?</button>
            </>:
            <>
                <h2 className={styles.title}>Вход</h2>
                <div className={styles.wrapper}>
                    <FormInput value={login} type='text'/>
                </div>
                <div className={styles.wrapper}>
                    <FormInput value={password} type='password'/>
                </div>
                <div className={styles.wrapper}>
                    <FormButton onClick={e=>form(formToggle.SIGN_IN,dispatch,e)}
                                text='Войти'/>
                </div>
                <button className={styles.buttonSmall}
                        onClick={e=>onToggleForm(formToggle.SIGN_UP, dispatch,e)}>Зарегистрироваться?</button>
            </>
        }
    </form>
};

export default Form;