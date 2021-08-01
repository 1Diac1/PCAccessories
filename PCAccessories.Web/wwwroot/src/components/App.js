import "../css/App.css";

import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>

      <Redirect from='/' to='/Home'/>

      <div>
        <Header />
        <Route path='/Home' component={Home} />
        <Route path='/Login' component={Auth} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
