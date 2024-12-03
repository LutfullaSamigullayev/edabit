function overTwentyOne(cards) {
  // Your code here.
  let summ = 0
  let ace = 0
  cards.map((card) => {
    if(typeof card === 'number') {
      summ += card
    } else if(card === 'J' || card === 'Q' ||card === 'K') {
      summ += 10
    } else if(card === 'A') {
      summ += 11
      ace ++
    }
  })
  while(summ > 21 && ace > 0) {
    summ -= 10
    ace --
  }
return summ > 21 ? true : false
}

module.exports = overTwentyOne;
