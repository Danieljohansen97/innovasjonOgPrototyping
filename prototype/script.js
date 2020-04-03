const loginForm = document.querySelector('#loginForm');
const logoutBtn = document.querySelector('#logoutBtn');

// Login
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if(loginForm['username'].value === testUser.username && loginForm['password'].value === testUser.password) {
            console.log("Velkommen");
            document.querySelector('#error').innerHTML = "";
            window.location = "leietager.html";
        } else {
            document.querySelector('#error').innerHTML = "Feil brukernavn eller passord";
        }
    });
};

// Logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();

        window.location = "index.html";
    });
};


