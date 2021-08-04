import React, { FC, useState, useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);


  return (
    <div>
      <input
            onChange={e => setUsername(e.target.value)}
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
        <button onClick={() => store.login(username, password)}>Войти</button>
    </div>
  );
};

export default observer(LoginForm);
