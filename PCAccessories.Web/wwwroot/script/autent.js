const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken;
let errors = [];

function signIn() {
	fetch('http://localhost:3161/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        username: checkLogin.value,
        password: checkPass.value,
    })
    })
    .then(response => response.json())
    .then(json => callBack(json))
    .then(error => checkErrorsIn())
} 
function callBack(x) {
    accessToken = x.accessToken
    refreshToken = x.refreshToken
    errors = x.errors;
    try {
        if(accessToken != null && refreshToken != null) {
            localStorage.setItem('accessToken', addAccessToken);
            localStorage.setItem('refreshToken', addRefreshToken);
            window.location.replace('home.html');
        }
        alert(errors);
    } catch(errors) {
        alert(err)
    }
}
function checkErrorsIn() {
    switch (errors) {
        case (checkLogin.value == null):
            alert('Введите логин')
            break;
        case (checkPass.value == null):
            alert('Введите пароль')
            break;
    }
}