const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken, errorIn;

function signIn() {
    axios.post('http://localhost:3161/api/login', {
    username:checkLogin.value,
    password: checkPass.value,
    })
    .then(res => {
        accessToken = res.accessToken;
        refreshToken = res.refreshToken;

        if(accessToken != null && refreshToken != null) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            window.location.replace('index.html');
        }
})
    .catch(function (error) {
        alert(error)
})
}