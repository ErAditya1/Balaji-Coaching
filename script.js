const logregBox = document.querySelector ('.logreg-box');
const loginlink = document.querySelector ('.login-link');
const registerlink = document.querySelector ('.register-link');

register-link.addEventListener('click', ()=>{
    logregBox.classList.add('active');
});

login-loginlink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');
});