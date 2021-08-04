import React from 'react';
import { useState } from 'react';
import {login} from "./AuthFunc";

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    return (
        <div>
            <input onChange={e => setUsername(e.target.value)} value={username} type="text"/>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email"/>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password"/>
            <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type="password"/>

            <button onClick={login(username, email, password, confirmPassword)}>CLICK</button>
        </div>
    );
};

export default LoginForm;