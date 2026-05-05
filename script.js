const header = document.querySelector('.top-app-bar');
window.addEventListener('scroll', () => {
  header.classList.toggle('top-app-bar--scrolled', window.scrollY > 16);
});

