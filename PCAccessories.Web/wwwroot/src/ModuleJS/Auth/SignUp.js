import { NavLink, Redirect } from "react-router-dom";
import React from 'react';

let refLogin = React.createRef();
let refEmail = React.createRef();
let refPass = React.createRef();
let refConfirmPass = React.createRef();
let refErrors = React.createRef();


const SignIn = () => {
  return (
    <div className="Auth">
      <div className="SignIn">
        <h1>Регистрация</h1>
        <input ref={refLogin} type="text" placeholder="Логин" />
        <input ref={refEmail} type="mail" placeholder="Почта" />
        <input ref={refPass} type="password" placeholder="Пароль" />
        <input ref={refConfirmPass} type="password" placeholder="Подтвердите пароль" />
        <button onClick={SignUpReq}>Зарегистрироваться</button>
        <h3>
          <NavLink to='/SignIn'>Уже есть аккаунт?</NavLink>
        </h3>
        <p ref={refErrors} className='errors'></p>
      </div>
    </div>
  );
};

const SignUpReq = () => {
  let login = refLogin.current.value;
  let email = refEmail.current.value;
  let pass = refPass.current.value;
  let confirmPass = refConfirmPass.current.value;

  fetch("http://localhost:3161/api/v1/auth/register", {
    method: "POST",
    body: JSON.stringify({
      Username: login,
      Email: email,
      Password: pass,
      ConfirmPassword: confirmPass,
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
        <Redirect to='/SignIn'/>
      }
    })
};

export default SignIn;
