import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="Auth">
      <div className="SignIn">
        <h1>Вход</h1>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <p>
          <a>Забыли пароль?</a>
        </p>
        <button>Войти</button>
        <h3>
          <NavLink to='/SignUp'>Нет аккаунта?</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
