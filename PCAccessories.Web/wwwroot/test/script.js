// const login = document.getElementById('login');
// const password = document.getElementById('password');
const btn = document.getElementById('btn');
const xml = new XMLHttpRequest;

xml.open('GET', 'http://localhost:3161/api/users');
xml.addEventListener('load', () => {
    console.log("LOAD SUCCESS")
});

xml.send();