// Script to change background-color of navigation on scroll
const navigation = document.querySelector('.navigation');

window.onscroll = () => {
	if (window.scrollY > 50) {
    navigation.classList.add('navigation-scrolled');
  } else {
    navigation.classList.remove('navigation-scrolled');
  }
};
