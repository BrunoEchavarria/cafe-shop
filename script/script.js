const toggleMenuElemnt = document.getElementById('toggle-menu');
const navBarElemnt = document.getElementById('nav-bar');

toggleMenuElemnt.addEventListener('click', ()=> {
    navBarElemnt.classList.toggle('nav-bar--show');
})