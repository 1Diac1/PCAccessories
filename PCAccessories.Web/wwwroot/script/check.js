let tokenCheck = localStorage.getItem('accessToken');

if (tokenCheck != null) {
    window.location.replace('test/index.html');
}