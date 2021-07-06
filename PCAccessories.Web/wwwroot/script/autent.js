const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken, errorIn;

function signIn() {
    axios.post('http://localhost:3161/api/login', {
    username:checkLogin.value,
    password: checkPass.value,
    })
    .then(res => res.json())
    .then(json => callBack(json))
    .catch(function (error) {
        alert(error)
})
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
let accessToken = localStorage.getItem('accessToken');
if(accessToken != null) {
    window.location.replace('home.html');
}