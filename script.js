document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.toggle-btn');
    const navUl = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    // Counter 1
    let counter1 = 0;
    const counter1Element = document.getElementById('counter1');
    const interval1 = setInterval(() => {
        if (counter1 < 49) {
            counter1++;
            counter1Element.textContent = counter1 + "+";
        } else {
            clearInterval(interval1);
        }
    }, 100); // Adjust the interval as needed

    // Counter 2
    let counter2 = 0;
    const counter2Element = document.getElementById('counter2');
    const interval2 = setInterval(() => {
        if (counter2 < 39) {
            counter2++;
            counter2Element.textContent = counter2 + "+";
        } else {
            clearInterval(interval2);
        }
    }, 100); // Adjust the interval as needed
});