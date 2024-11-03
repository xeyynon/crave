// preloader.js
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');

    // Hide the preloader after a timeout or once everything is ready
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide the preloader
    }, 180); // Adjust the time as needed
});
