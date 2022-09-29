const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');

const showCard = (e) => {
	const activeCard = e.target;
	cards.forEach((card) => card.classList.remove('active'));
	activeCard.classList.add('active');
	const season = activeCard.dataset.season;
	body.dataset.bg = season;
};
cards.forEach((card) => card.addEventListener('click', showCard));
