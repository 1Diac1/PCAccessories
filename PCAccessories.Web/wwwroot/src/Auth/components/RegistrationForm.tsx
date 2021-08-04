import React, {FC, useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const RegistrationForm: FC = () => {
    const [email, setMail] = useState<string>("");
    const [username, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const {store} = useContext(Context);

    return (
        <div>
            <input
                onChange={e => setMail(e.target.value)}
                value={email}
                type="text"
                placeholder="Введите свой email"
            />
            <input
                onChange={e => setLogin(e.target.value)}
                value={username}
                type="text"
                placeholder="Введите свой логин"
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Введите свой пароль"
            />
            <input
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                placeholder="Подтвердите свой пароль"
            />
            <button onClick={() => store.registration(username, email, password, confirmPassword)}>Зарегистрироваться
            </button>
        </div>
    );
};

export default observer(RegistrationForm);
