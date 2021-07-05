const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPassword');

function signIn() {
    fetch('http://localhost:3161/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        username:checkLogin.value,
        password: checkPass.value,
    })
    })
    .then((data) => {
        console.log(data);
    });
}