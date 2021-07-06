const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');
let accessToken, refreshToken, errorIn;

function signIn() {
    axios.post('http://localhost:3161/api/login', {
    username:checkLogin.value,
    password: checkPass.value,
    })
    .then(res => {
        alert('Заявка отправлена');
        console.log(res)
})
    .catch(function (error) {
        alert(error)
})
}