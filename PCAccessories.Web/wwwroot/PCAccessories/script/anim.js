const btn_signUp = document.getElementById('signUp');
const btn_signIn = document.getElementById('signIn');
const container = document.getElementById('container');

btn_signUp.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

btn_signIn.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


