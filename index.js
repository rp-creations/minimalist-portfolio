
document.addEventListener('DOMContentLoaded', function() { 
    const toggleButton = document.getElementById('dark-mode-toggle');
    const navMenu = document.querySelector('nav.desktop-menu');
    const menuToggle = document.getElementById('menu-toggle');
    const body = document.body;
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';

        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entries)

            if(entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('scale');
                }, 300);

            } else {
                setTimeout(() => {
                    entry.target.classList.remove('scale');
                }, 300);   
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.image');
    hiddenElements.forEach((el) => observer.observe(el));
});
