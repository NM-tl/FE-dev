const suits = (suit, className, imagePath) => `
<div class="card ${className || ''}">
        <div class="card__info">${suit}<img src="../images/clubs.svg" alt="clubs"></div>
        <img class="person" src="images/clubs.svg" alt="clubs">
        <div class="card__info">${suit}<img src="images/clubs.svg" alt="clubs"></div>
</div>
<div class="card ${className || ''}">
    <div class="card__info">${suit}<img src="images/spades.svg" alt="spades"></div>
    <img class="person" src="${imagePath || 'images/spades.svg'}" alt="spades">
    <div class="card__info">${suit}<img src="images/spades.svg" alt="spades"></div>
</div>
<div class="card ${className || ''}">
    <div class="card__info">${suit}<img src="images/diamonds.svg" alt="diamonds"></div>
    <img class="person" src="images/diamonds.svg" alt="diamonds">
    <div class="card__info">${suit}<img src="images/diamonds.svg" alt="diamonds"></div>
</div>
<div class="card ${className || ''}">
    <div class="card__info">${suit}<img src="images/hearts.svg" alt="hearts"></div>
    <img class="person" src="images/hearts.svg" alt="hearts">
    <div class="card__info">${suit}<img src="images/hearts.svg" alt="hearts"></div>
</div>
`

const ranks = [{name:'J', image: 'images/spades.svg'}, 'Q', 'K', 'T']

console.log(ranks);

const cardsOfNumber = Array.from(Array(9), (_, index) => suits(index + 2))

const cardsOfRank = ranks.map((rank) => suits(rank.name, 'card--person', rank.image))

const deck = [...cardsOfNumber, ...cardsOfRank].join('')

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper')

    if (wrapper) {
        wrapper.innerHTML = deck
    }
})



