// Mudar tema
const iconTheme = document.querySelector('.theme');
iconTheme.addEventListener('click', () => {
    document.body.classList.toggle('light')
    if (document.body.classList.contains('light')) {
        iconTheme.src = 'images/icon-moon.svg'
    } else {
        iconTheme.src = 'images/icon-sun.svg'
    }
});
