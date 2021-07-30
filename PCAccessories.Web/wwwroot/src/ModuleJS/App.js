import "../css/main.css";

import ArticleHome from "./ArticleHome";
import Auth from "./Auth";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter, Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <BrowserRouter>

      <Redirect from='/' to='/ArticleHome'/>

      <div>
        <Header />
        <Route path='/ArticleHome' component={ArticleHome} />
        <Route path='/Auth' component={Auth} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
