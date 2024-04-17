// script.js
document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('userId').value = '';
    document.getElementById('password').value = '';
    // Optionally, redirect to another page or hide the login form
    // window.location.href = '/home';
});
