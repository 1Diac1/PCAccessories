import '../../css/Auth.css'

import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const Auth = () => {
    return (
      <BrowserRouter>
        <Redirect to='/Login'/>

        <Route path='/Login' component={Login}/>
        <Route path='/Registration' component={Registration}/>
      </BrowserRouter>
    );
  };

export default Auth;