const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken;
let errorsIn = [];

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
} 
function callBack(x) {
    accessToken = x.accessToken
    refreshToken = x.refreshToken
    errorsIn = x.errors;
    try {
        if(accessToken != null && refreshToken != null) {
            localStorage.setItem('accessToken', addAccessToken);
            localStorage.setItem('refreshToken', addRefreshToken);
            window.location.replace('home.html');
        } else {
            alert(errorsIn);
        }
    } catch(err) {
        console.log(err)
    }
}