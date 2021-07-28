import { NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="marginPage">
      <header>
        <h1 className="logo">
          <a href="#s">T&amp;D</a>
        </h1>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <NavLink activeClassName='activeHeader' to="/ArticleHome">Главная</NavLink>
              </li>
              <li>
                <NavLink activeClassName='activeHeader' to="/Shop">Товары</NavLink>
              </li>
              <li>
                <NavLink activeClassName='activeHeader' to="/Cart">Корзина</NavLink>
              </li>
              <li>
                <NavLink activeClassName='activeHeader' to="/Auth">Войти</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
