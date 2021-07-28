import React from "react";
import axios from "axios";

class RequestSignIn extends React.Component {

    state = {

    }

  componentDidMount() {
    const apiUrl = "http://localhost:3161/api/v1/auth/login";
    axios.post(apiUrl)
        .then(res => console.log(res));
  }
  render() {
    return <button>Войти</button>;
  }
}

export default RequestSignIn;
