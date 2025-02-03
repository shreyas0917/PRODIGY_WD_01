// Add scroll event listener to change navbar style
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add hover effect to menu items
const menuItems = document.querySelectorAll('#navbar ul li a');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#6a11cb';
        item.style.backgroundColor = 'white';
    });

    item.addEventListener('mouseout', () => {
        if (window.scrollY > 50) {
            item.style.color = '#fff';
        } else {
            item.style.color = 'white';
        }
        item.style.backgroundColor = 'transparent';
    });
});