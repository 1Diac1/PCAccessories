const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken, errorIn;

function signIn(){
    fetch('http:localhost:3161/api/login',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf8'
    },
    body: JSON.stringfy({
        username: checkLogin.value,
        password: checkPass.value,
    })
    })
    .then(response => response.json())
    .then(json => callBack(json))
}
function callBack(x) {
    accessToken = x.accessToken;
    refreshToken = x.refreshToken;
    try {
        if(accessToken != null && refreshToken != null) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            window.location.replace('home.html');
        }
    } catch (error) {
        console.log(error)
    }
}
let token = localStorage.getItem('accessToken');
if(token != null) {
    window.location.replace('home.html');
}