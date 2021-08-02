import React, { FC, useState, useContext } from "react"
import {Context} from '../index'

const LoginForm: FC = () => {

    const [email, setEmail] = useState<string> ('')
    const [password, setPassword] = useState<string> ('')
    const {store} = useContext(Context);
    
    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text'
                placeholder='Введите свой email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                placeholder='Введите свой пароль'
            />
            <button onClick={() => store.login(email, password)}>Войти</button>
        </div>
    );
};

export default LoginForm;