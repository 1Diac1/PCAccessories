const login = document.getElementById('username');
const mail = document.getElementById('mail')
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
let addAccessToken, addRefreshToken, errorUp;

axios.post('http://localhost:3161/api/register', {
    username:login.value,
    password: password.value,
    confirmpassword: confirmpassword.value,
    email: mail.value,
    })
    .then(res => {
        alert('Заявка отправлена');})
    .catch(function (error) {
        alert(error)})