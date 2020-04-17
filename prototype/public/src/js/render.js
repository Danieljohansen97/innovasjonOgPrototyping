const loggedInStuff = document.querySelectorAll('.logged-in');
const loggedOutStuff = document.querySelectorAll('.logged-out');

// Conditional constants

const setupUI = (user) => {
    if (user) {
        // Toggle UI elements
        loggedInStuff.forEach(item => item.style.display = 'block');
        loggedOutStuff.forEach(item => item.style.display = 'none');
        
        // Profile render
        if(window.location.href.endsWith("profile.html")) {
            document.querySelector('#profileDisplayName').innerHTML = "Navn: " + user.displayName;
            document.querySelector('#profileEmail').innerHTML = "E-post: " + user.email;
        }
    } else {
        // Toggle UI elements
        loggedInStuff.forEach(item => item.style.display = 'none');
        loggedOutStuff.forEach(item => item.style.display = 'block');
    }
}