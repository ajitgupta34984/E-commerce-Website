const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up Form Submitted!');
    // Add your sign-up logic here
});

document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign In Form Submitted!');
    // Add your sign-in logic here
});
