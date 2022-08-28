const navMenu = document.querySelector('.nav'),
	openNav = document.querySelector('.open-nav');

openNav.addEventListener('click', () => {
	navMenu.classList.toggle('active');
});
