import React, {useContext, useEffect, useState} from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from "./components/RegistrationForm";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {IUSER} from "./models/IUSER";
import UserService from "./services/UserService";

function App() {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUSER[]>([])

    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    if(!store.isAuth) {
        return <RegistrationForm/>;
    }

  return (
      <div className="App">
          { console.log(store) }
          <h1>{store.isAuth ? `Вы вошли как:  ${store.user}` : 'Пожалуйста войдите'}</h1>
        <button onClick={() => store.logout()}>Exit</button>

        {/*<div>*/}
        {/*    <button onClick={() => getUsers()}>Get Users</button>*/}
        {/*</div>*/}

        {/*{users.map(user => {*/}
        {/*   <pre key={user.Email}>{user.Email}</pre>*/}
        {/*})}*/}
    </div>
  );
}

export default observer(App);