const checkLogin = document.getElementById('signLogin');
const checkPass = document.getElementById('signPass');

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
    .then(() => {
        try {
            window.location.replace('index.html');
        } catch(err) {
            console.log(err)
        }
    });
} 