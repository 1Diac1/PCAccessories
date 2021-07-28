import React from "react";

class RequestSignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: 'React POST Request Example' }),
    };
    fetch("http://localhost:3161/api/v1/auth/login", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div></div>;
  }
}

export default RequestSignIn;
