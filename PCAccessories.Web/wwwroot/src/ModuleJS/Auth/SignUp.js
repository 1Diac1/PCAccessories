import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="Auth">
      <div className="SignIn">
        <h1>Регистрация</h1>
        <input type="text" placeholder="Логин" />
        <input type="mail" placeholder="Почта" />
        <input type="password" placeholder="Пароль" />
        <input type="password" placeholder="Подтвердите пароль" />
        <p>
          <a>Забыли пароль?</a>
        </p>
        <button>Войти</button>
        <h3>
          <NavLink to='/SignIn'>Уже есть аккаунт?</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
