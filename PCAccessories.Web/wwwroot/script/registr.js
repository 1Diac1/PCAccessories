const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

function signUp() {
    fetch('http://localhost:3161/api/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        username:login.value,
        password: password.value,
        confirmpassword: confirmpassword.value,
        email: mail.value,
    })
    })
    .then((data) => {
        console.log(data);
    });
    login.value = '';
    password.value = '';
    confirmpassword.value = '';
    mail.value = '';
}