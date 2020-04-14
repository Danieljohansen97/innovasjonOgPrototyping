const loginForm = document.querySelector('#loginForm');
const signupForm = document.querySelector('#signupForm');

// Auth state changed
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const userEmail = user.email;
        console.log("Signed in as: " + userEmail);

        setupUI(user);
    } else {
        console.log("Signed out.");
        // User is signed out
        setupUI();
    }
});

// Login form listener
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get input data
        let email = loginForm['email'].value;
        let password = loginForm['password'].value;
    
        // Log the user in
        auth.signInWithEmailAndPassword(email, password).catch((err) => {
            // Handle errors here
            let message = err.message;
            console.log(message);
        }).then(() => {
            // Move user to hytteBrowser
            //window.location = "index.html";
        });
    });
}

// Sign the user out
const signOut = () => {
    auth.signOut();
}

// Signup form listener
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Get input data
        let email = signupForm['email'].value;
        let password = signupForm['password'].value;
        let repeatPassword = signupForm['repeatPassword'].value;
        let name = signupForm['fName'].value + " " + signupForm['lName'].value;
    
        if (password === repeatPassword) {
            // Sign the user up
            auth.createUserWithEmailAndPassword(email, password).catch((err) => {
                // Handle errors here
                let message = err.message;
                console.log(message);
            }).then(() => {
                // Update profile information
                auth.currentUser.updateProfile({
                    displayName: name
                }).then(() => {
                    $('#signupModal').modal('hide');
                }).catch((err) => {
                    console.log(err.message);
                });
            });
        } else {
            // TODO: display error message
            console.log("Passordene er ikke like");
        }
    });
}