import React from "react";

export default function RequestSignIn() {

  fetch('http://localhost:3161/api/v1/auth/login')
    .then(response => response.json())
    .then(json => console.log(json))

  return (
    <button>Войти</button>
  );
};
