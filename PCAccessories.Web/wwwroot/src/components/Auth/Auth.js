import "../../css/Auth.css";

import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import ArticleHome from "../Home/Home";

const Auth = () => {
  return (
    <BrowserRouter>
      <Redirect to="/Login" />
      <Route path="/Home" component={ArticleHome} />
      <Route path="/Login" component={Login} />
      <Route path="/Registration" component={Registration} />
    </BrowserRouter>
  );
};

export const RedirectAuth = () => {
    return <PrivateRoute path='/Home' component={ArticleHome} />
};

export default Auth;
