const MinigameBox = document.querySelector('.minigame_box');
const reset_btn = document.querySelector('.reset_btn')
const xSet = 4;
const ySet = 3;
let color = [];
let clicked = true;
let clickCard = [];
let endCard = []
let colorList = [
  'red', 'red',
  'orange', 'orange',
  'blue', 'blue',
  'gray', 'gray',
  'green', 'green',
  'pink', 'pink',
];
let nextColor = colorList.slice();

function colorMix() {
  for (let i = 0; nextColor.length > 0; i += 1) {
    color = color.concat(nextColor.splice(Math.floor(Math.random() * nextColor.length), 1))
  }
}

function reset() {
  MinigameBox.innerHTML = ''
  nextColor = colorList;
  color = [];
  endCard = []
  colorMix()
  cardSet(xSet, ySet);
}

reset_btn.addEventListener('click',() => {
  reset()
})


const cardSet = (xSet, ySet) => {
  clicked = false;
  for (let i = 0; i < xSet * ySet; i += 1) {
    const card = document.createElement('div')
    card.classList.add('card')
    const cardInner = document.createElement('div')
    cardInner.classList.add('card_inner')
    const cardFront = document.createElement('div')
    cardFront.classList.add('card_front')
    const cardBack = document.createElement('div')
    cardBack.classList.add('card_back')
    cardBack.style.backgroundColor = color[i]
    cardInner.appendChild(cardFront)
    cardInner.appendChild(cardBack)
    card.appendChild(cardInner)
    card.addEventListener('click', () => {
      if (clicked && !endCard.includes(card)) {
        card.classList.toggle('flipped')
        clickCard.push(card);
        if (clickCard.length === 2) {
          if (clickCard[0].querySelector('.card_back').style.backgroundColor ===
          clickCard[1].querySelector('.card_back').style.backgroundColor) {
            if(clickCard[0] === clickCard[1]) {
              clickCard = []
              return;
            }
            endCard.push(clickCard[0])
            endCard.push(clickCard[1])
            clickCard = [];
            if (endCard.length === xSet * ySet) {
              setTimeout(() => {
                alert('Congratulations!!!')
              }, 1000)
              reset()
            }
          } else {
            clicked = false;
            setTimeout(() => {
              clickCard[0].classList.remove('flipped');
              clickCard[1].classList.remove('flipped');
              clicked = true;
              clickCard = [];
            }, 1000)
          }
        }
      }
    })
    MinigameBox.appendChild(card);
  }

  document.querySelectorAll('.card').forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('flipped')
    }, 1000 + 100 * i)
  });
  setTimeout(() => {
    document.querySelectorAll('.card').forEach((card, i) => {
      card.classList.remove('flipped')
    });
    clicked = true;
  }, 5000);
}
colorMix()
cardSet(xSet, ySet);