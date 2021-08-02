import React, { FC, useState, useContext } from "react";
import { Context } from "../index";

const LoginForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

  return (
    <div>
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
      <button onClick={() => store.login(login, password)}>Войти</button>
    </div>
  );
};

export default LoginForm;
