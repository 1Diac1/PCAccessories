import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import React from "react";
import ArticleHome from "../Home/Home";
import { render } from "react-dom";

let refLogin = React.createRef();
let refPass = React.createRef();
let refErrors = React.createRef();
let RedirectHome = React.createRef();

const Login = () => {
  return (
      <div className="Auth">
        <div ref={RedirectHome}></div>
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
          <p ref={refErrors} className="errors"></p>
        </div>
      </div>
  );
};

const SignInReq = () => {
  
};

export default Login;
