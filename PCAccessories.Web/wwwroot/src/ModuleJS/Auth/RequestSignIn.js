import React from "react";

class RequestSignIn extends React.Component {
  componentDidMount() {
    const apiUrl = "http://localhost:3161/api/v1/auth/login";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }
  render() {
    return <button>Войти</button>;
  }
}

export default RequestSignIn;
