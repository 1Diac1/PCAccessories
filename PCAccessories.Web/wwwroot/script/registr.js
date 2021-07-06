const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let addAccessToken, addRefreshToken;
let errorsSignUp = [];
let ConfirmPassword = errorsSignIn.ConfirmPassword;

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
    .then(json => callBack(json));
} 
function callBack(x) {
    addAccessToken = x.accessToken;
    addRefreshToken = x.refreshToken;
    errorsSignUp = x.errors;
    try {
        if(addAccessToken != null && addRefreshToken != null) {
            localStorage.setItem('accessToken', addAccessToken);
            localStorage.setItem('refreshToken', addRefreshToken);
            window.location.replace('home.html');
        }
        alert(errorsSignUp)
    } catch(err) {
        alert(err)
    }
}
let tokenRegister = localStorage.getItem('accessToken');
if(tokenRegister != null) {
    window.location.replace('../test/index.html');
}