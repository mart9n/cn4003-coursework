console.log('hello world');

const navigation = document.querySelector('.navigation');

window.onscroll = () => {
	if (window.scrollY > 50) {
    navbar.classList.add('navigation-scrolled');
  } else {
    navbar.classList.remove('navigation-scrolled');
  }
};
