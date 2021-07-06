const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken;

function signIn(){
    fetch('http://localhost:3161/api/login',{
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
    accessToken = x.accessToken;
    refreshToken = x.refreshToken;
    try {
        if(accessToken != null && refreshToken != null) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            window.location.replace('home.html');
        }
        alert(error)
    } catch(err) {
        console.log(err)
    }
}
let token = localStorage.getItem('accessToken');
if(token != null) {
    window.location.replace('home.html');
}
