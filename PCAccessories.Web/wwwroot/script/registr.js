const btn = document.getElementById('SignUp');
const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');

function signUp() {
    fetch('http://localhost:3161/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        name:login.textContent,
        password: password.textContent,
        email: mail.textContent
    })
    })
    .then((data) => {
        console.log(data);
    });
}