
const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const container = document.querySelector('.container')


signUpBtn.addEventListener('click', (e)=> {
    container.classList.add('sign-up-mode')
})

signInBtn.addEventListener('click', (e)=> {
    container.classList.remove('sign-up-mode')
})