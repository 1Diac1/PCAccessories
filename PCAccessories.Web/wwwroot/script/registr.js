const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let addAccessToken, addRefreshToken;

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
    .then(response => response.json())
    .then(json => callBack(json))
    .then(Error => checkErrorsUp());
} 
function callBack(x) {

    addAccessToken = x.accessToken;
    addRefreshToken = x.refreshToken;

    try {
        if(addAccessToken != null && addRefreshToken != null) {
            localStorage.setItem('accessToken', addAccessToken);
            localStorage.setItem('refreshToken', addRefreshToken);
            window.location.replace('home.html');
        }
    } 
    catch(err) {
        alert(err)
    }
}
function checkErrorsUp() {
    switch (errors) {
        case (login.value == null):
            alert('Введите логин')
            break;
        case (password.value == null):
            alert('Введите пароль')
            break;
        case (mail.value == null):
            alert('Введите почту')
            break;
        case (confirmpassword.value == null):
            alert('Подтвердите пароль')
            break;
    }
}
let tokenRegister = localStorage.getItem('accessToken');
if(tokenRegister != null) {
    window.location.replace('../test/index.html');
}