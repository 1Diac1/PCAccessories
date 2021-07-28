import React from "react";

class RequestSignIn extends React.Component {
  render() {
    fetch("http://localhost:3161/api/v1/auth/login")
      .then((response) => response.json())
      .then((data) => console.log(data));

    return <button>Войти</button>;
  }
}

export default RequestSignIn;
