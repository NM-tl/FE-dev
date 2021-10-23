const suits = (suit, className) => `
<div class="card ${className || ''}">
        <div class="card__info">${suit}<img src="../images/clubs.svg" alt="clubs"></div>
        <img class="person" src="images/clubs.svg" alt="clubs">
        <div class="card__info">${suit}<img src="images/clubs.svg" alt="clubs"></div>
</div>
<div class="card ${className || ''}">
    <div class="card__info">${suit}<img src="images/spades.svg" alt="spades"></div>
    <img class="person" src="images/spades.svg" alt="spades">
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

const ranks = ['J', 'Q', 'K', 'T']

const cardsOfNumber = Array.from(Array(9), (_, index) => suits(index + 2))

const cardsOfRank = ranks.map((rank) => suits(rank, 'card--person'))

const deck = [...cardsOfNumber, ...cardsOfRank].join('')

// for(i=0; i<deck.length; i++){
//     if(i === 0){
//         value = `<img class="person" src="images/jack.svg" alt="hearts">`
//     }else {
//         value = `<img className="person" src="images/hearts.svg" alt="hearts">`
//     }
// }

console.log(deck);


document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper')

    if (wrapper) {
        wrapper.innerHTML = deck
    }
})



