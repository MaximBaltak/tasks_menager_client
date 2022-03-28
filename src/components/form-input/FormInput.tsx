import React from 'react';
import styles from './FormInput.module.scss'
import {Dispatch} from "../../store/store";
import {changeLogin, changePassword} from "../../store/slices/authorization-slice/authorization-slice";
interface IProps {
    value: string;
    type: string;
}

const FormInput: React.FC<IProps> = ({value,type}) => {
    const dispatch=Dispatch()
    return<input className={styles.input}
           type={type}
           value={value}
           onChange={e =>type==='text'?dispatch(changeLogin(e.target.value)):
               dispatch(changePassword(e.target.value))}
           placeholder={type === 'text' ? 'Логин' : 'Пароль'}/>
}

export default FormInput;