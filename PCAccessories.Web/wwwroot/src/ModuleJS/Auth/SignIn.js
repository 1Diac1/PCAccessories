import { NavLink } from "react-router-dom";
import Requst from "./RequestSignIn";

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
        <Requst/>
        <h3>
          <NavLink to='/SignUp'>Нет аккаунта?</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default SignIn;
