import React from 'react';
import styles from './Auth.module.scss'
import Form from "../form/Form";
import {IForm} from "../../store/slices/authorization-slice/types";
interface IProps{
    typeForm:IForm,
    login:string,
    password:string,
    error:string
}
const Auth:React.FC<IProps> = ({typeForm,login,password,error}) => {
    return (
        <div className={styles.login}>
            <Form typeForm={typeForm}
                  login={login}
                  password={password}
                  error={error}/>
        </div>
    );
};

export default Auth;