const hamburgerButton = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgermenu')
const navbar = document.getElementById('navbar');
const scrollToUp = document.querySelector(".scrollUp")

console.log(hamburgerButton)
console.log(navbar)

hamburgerButton.addEventListener('click', function () {
   hamburgerButton.classList.add('displayNone')
   hamburgerMenu.classList.add('displayNone')
   navbar.classList.remove('navbarHide')
   navbar.classList.toggle('navbarShow')
});

document.addEventListener('click', function (event) {
    // Check if the click is outside the navbar
    if (!navbar.contains(event.target) && !hamburgerButton.contains(event.target)) {
        if (navbar.classList.contains('navbarShow')) {
            navbar.classList.remove('navbarShow');
            navbar.classList.add('navbarHide')
            hamburgerButton.classList.remove('displayNone');
            hamburgerButton.parentElement.classList.remove('displayNone');
        }
    }
});

scrollToUp.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

window.scrollTo({ top: 0, behavior: 'smooth' });
