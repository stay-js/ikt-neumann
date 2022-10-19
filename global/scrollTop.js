const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopButton?.classList.add('active');
  } else {
    scrollTopButton?.classList.remove('active');
  }
});
