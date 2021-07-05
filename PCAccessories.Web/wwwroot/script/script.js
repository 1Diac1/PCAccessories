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
    .then((data) => {
		let json = JSON.stringify({
			accessToken: data.accessToken,
			refreshToken: data.refreshToken,
		});
		return json;
        console.log(data);
    });
	console.log(JSON.parse(json));
}