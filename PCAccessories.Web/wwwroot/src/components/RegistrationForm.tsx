import React, { FC, useState, useContext } from "react";
import { Context } from "../index";
import {observer} from "mobx-react-lite";

const RegistrationForm: FC = () => {
    const [mail, setMail] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ConfirmPassword, setConfirmPassword] = useState<string>("");
    const { store } = useContext(Context);

    return (
        <div>
            <input
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                type="text"
                placeholder="Введите свой email"
            />
            <input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                type="text"
                placeholder="Введите свой логин"
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Введите свой пароль"
            />
            <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
                type="password"
                placeholder="Подтвердите свой пароль"
            />
            <button onClick={() => store.registration(login, mail, password, ConfirmPassword)}>Зарегистрироваться</button>
        </div>
    );
};

export default observer(RegistrationForm);
