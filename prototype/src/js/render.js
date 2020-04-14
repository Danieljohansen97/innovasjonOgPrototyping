const loggedInStuff = document.querySelectorAll('.logged-in');
const loggedOutStuff = document.querySelectorAll('.logged-out');

const setupUI = (user) => {
    if (user) {
        // Toggle UI elements
        loggedInStuff.forEach(item => item.style.display = 'block');
        loggedOutStuff.forEach(item => item.style.display = 'none');
    } else {
        // Toggle UI elements
        loggedInStuff.forEach(item => item.style.display = 'none');
        loggedOutStuff.forEach(item => item.style.display = 'block');
    }
}