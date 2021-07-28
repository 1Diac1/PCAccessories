import { NavLink } from "react-router-dom";
import RequestSignIn from "./RequestSignIn";

const SignIn = () => {
  return (
    <div className="Auth">
      <form className="SignIn">
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
      </form>
      <RequestSignIn/>
    </div>
  );
};

export default SignIn;
