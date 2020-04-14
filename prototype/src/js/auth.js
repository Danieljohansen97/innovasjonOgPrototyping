const loginForm = document.querySelector('#loginForm');

// Login user
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let email = loginForm['email'].value;
    let password = loginForm['password'].value;

    console.log(email, password);
    auth.signInWithEmailAndPassword
});