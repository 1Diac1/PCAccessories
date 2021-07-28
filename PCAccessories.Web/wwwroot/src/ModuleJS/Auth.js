import '../css/Auth.css'

import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

const Auth = () => {
    return (
      <BrowserRouter>
        <Redirect to='/SignIn'/>

        <Route path='/SignIn' component={SignIn}/>
        <Route path='/SignUp' component={SignUp}/>
      </BrowserRouter>
    );
  };

export default Auth;