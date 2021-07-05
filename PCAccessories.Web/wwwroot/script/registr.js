const btn = document.getElementById('SignUp');
let login = document.getElementById('username');
let mail = document.getElementById('mail')
let password = document.getElementById('password');
let confirmpassword = document.getElementById('password');

function signUp() {
    fetch('http://localhost:3161/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        name:login.value,
        password: password.value,
        confirmpassword: confirmpassword.value,
        email: mail.value,
    })
    })
    .then((data) => {
        console.log(data);
    });
}