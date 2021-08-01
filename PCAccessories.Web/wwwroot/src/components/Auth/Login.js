import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import React from "react";
import ArticleHome from "../Home/Home";
import { render } from "react-dom";

let refLogin = React.createRef();
let refPass = React.createRef();
let refErrors = React.createRef();

const Login = () => {
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
          <NavLink to="/Registration">Нет аккаунта?</NavLink>
        </h3>
        <p ref={refErrors} className='errors'></p>
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
    .then(response => response.json())
    .then(data => {
      let errors = data.errors;
      for (let key in errors) {
        refErrors.current.innerHTML = errors[key];
      }
      if(data.accessToken != undefined && data.refreshToken != undefined) {
        localStorage.setItem('AccessToken', data.accessToken);

          return(
              <div><Redirect to='/ArticleHome' /></div>
            )
      }
    })
};

export default Login;