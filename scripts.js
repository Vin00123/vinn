// Add any interactivity you want to enhance your pages
document.addEventListener('DOMContentLoaded', () => {
    console.log('Scripts loaded and running');

    // Example: Add a dynamic greeting
    const header = document.querySelector('header');
    const greeting = document.createElement('p');
    greeting.textContent = 'Welcome to Sta Lucia High School, ENJOY!';
    greeting.style.color = '#ffcc00';
    header.appendChild(greeting);
});
