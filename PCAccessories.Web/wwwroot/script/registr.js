const btn = document.querySelector('.btn');
const login = document.getElementById('username');
const password = document.getElementById('password');


function getRequests(callBack) {
    const xmlRequest = new XMLHttpRequest;
    xmlRequest.open("GET", "http://localhost:3161/api/users");
    
    xmlRequest.addEventListener('load', () => {
    const requests = JSON.parse(xmlRequest.responseText);
    callBack(requests)
    });

    xmlRequest.send();
}
function checkInput() {
    btn.addEventListener('click', () => {
        getRequests((requests) => {
    
            requests.forEach(posts => {
                console.log(requests)
                
            });
        });
    });
}