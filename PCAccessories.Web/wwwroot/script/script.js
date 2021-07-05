const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');

function signIn() {
    fetch('http://localhost:3161/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
        signLogin: checkLogin.value,
        signPass: checkPass.value,
    })
    })
    .then((data) => {
        console.log(data);
    });
}