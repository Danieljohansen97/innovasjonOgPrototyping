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

// User profile settings
if(window.location.href.endsWith("profile.html")) {
    // Get buttons
    const changeEmailBtn = document.querySelector('#changeEmailButton');
    const changePasswordBtn = document.querySelector('#changePasswordButton');
    const deleteUserBtn = document.querySelector('#deleteUserButton');

    // Change email
    changeEmailBtn.addEventListener('click', () => {
        let user = auth.currentUser;
        let email = user.email;
        let password = prompt("Please type in your password to change email.");
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);

        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            let newEmail = prompt("Skriv ønsket e-post");

            user.updateEmail(newEmail).then(() => {
                // Update successful
                setupUI(user);
            }).catch((err) => {
                // An error happened
                alert("Kunne ikke oppdatere e-post, noe gikk galt :(");
                console.log(err.message);
            });
          }).catch(function(error) {
            // An error happened.
            if (error.message === "The password is invalid or the user does not have a password."){
                alert("Passordet er ugyldig.");
            }
            console.log(error.message);
          });
    });

    // Change password
    changePasswordBtn.addEventListener('click', () => {
        let user = auth.currentUser;
        let email = user.email;
        let password = prompt("Vennligst skriv ditt gamle passord.");
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);

        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            let newPassword = prompt("Skriv ønsket passord");

            user.updatePassword(newPassword).then(() => {
                // Update successful
                setupUI(user);
            }).catch((err) => {
                // An error happened
                alert("Kunne ikke oppdatere passord, noe gikk galt :(");
                console.log(err.message);
            });
          }).catch(function(error) {
            // An error happened.
            if (error.message === "The password is invalid or the user does not have a password."){
                alert("Passordet er ugyldig.");
            }
            console.log(error.message);
          });
    });

    // Delete user
    deleteUserBtn.addEventListener('click', () => {
        let user = auth.currentUser;
        let email = user.email;
        let password = prompt("Vennligst skriv inn passord for å fortsette.");
        var credential = firebase.auth.EmailAuthProvider.credential(email, password);

        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            var confirmationGiven = confirm("Trykk på 'ok' for å slette brukeren.");

            if (confirmationGiven) {
                user.delete().then(() => {
                    setupUI(user);
                }).catch((error) => {
                    console.log(error.message);
                    alert("Kunne ikke slette brukeren");
                });
            } else {
                console.log("Aborted: did not delete user");
            };

          }).catch(function(error) {
            // An error happened.
            if (error.message === "The password is invalid or the user does not have a password."){
                alert("Passordet er ugyldig.");
            }
            console.log(error.message);
          });
    });
}