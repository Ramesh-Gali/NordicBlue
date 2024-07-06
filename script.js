const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',()=>{
    console.log(container.classlist);
    container.classList.add('active');
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
});



