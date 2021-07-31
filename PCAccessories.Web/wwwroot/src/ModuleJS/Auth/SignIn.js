import { NavLink } from "react-router-dom";
import React from "react";
import { render } from "@testing-library/react";

let refLogin = React.createRef();
let refPass = React.createRef();

const SignIn = () => {
  return (
    <div className="Auth">
      <div className="SignIn">
        <h1>Вход</h1>
        <input ref={refLogin} type="text" placeholder="Логин" />
        <input ref={refPass} type="password" placeholder="Пароль" />
        <p>
          <a>Забыли пароль?</a>
        </p>
        <button onClick={SignInReq}>Войти</button>
        <h3>
          <NavLink to="/SignUp">Нет аккаунта?</NavLink>
        </h3>
      </div>
    </div>
  );
};

const SignInReq = () => {
  let login = refLogin.current.value;
  let pass = refPass.current.value;

  fetch("http://localhost:3161/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({
      Username: login,
      Password: pass,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .catch((err) => {
    err.map((errors) => {
      render(<div>{errors}</div>)
    })
    render(<div>{err}</div>);
  })
};

export default SignIn;