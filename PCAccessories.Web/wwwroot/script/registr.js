const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let addAccessToken, addRefreshToken, errorUp;

function signUp() {
    axios.post('http://localhost:3161/api/register', {
    username:login.value,
    password: password.value,
    email: mail.value,
    confirmpassword: confirmpassword.value
    })
    .then(res => res.json())
    .then(json => callBack(json))
    .catch(function (error) {
        alert(error)
})
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
    } catch (error) {
        console.log(error)
    }
}