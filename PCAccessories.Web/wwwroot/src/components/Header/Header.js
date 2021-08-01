import { NavLink } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <a href="#s">T&amp;D</a>
      </h1>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="activeHeader" to="/Home">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeHeader" to="/Shop">
                Товары
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeHeader" to="/Cart">
                Корзина
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeHeader" to="/Login">
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
