function canCapture([myQueen, opponentsQueen]) {
  // Your code here.
  let [x1, y1] = [myQueen[0].charCodeAt(0) - 65 + 1, parseInt(myQueen[1])];
  // x larga 0-indexdagi harfni olib uning codi dan 65ni ayirsan u 0 ga tushadi
  // keyin 1 ni qo'shib qo'yamiz va alfavit bo'yicha o'rnini aniqlaymiz
  let [x2, y2] = [opponentsQueen[0].charCodeAt(0) - 65 + 1, parseInt(opponentsQueen[1])];
  // y larga esa 1-indexdagi raqamlarni olib stringdan numberga aylantiramiz
  const dioganal = Math.abs(x1 - x2) === Math.abs(y1 - y2);
  // va ularni diaganal fo'rmulasiga qo'yib tekshirib ko'ramiz
  const rooh = myQueen[0] === opponentsQueen[0] || myQueen[1] === opponentsQueen[1];
  // va gorizantal va vertikal fo'rmulasiga ham qo'yib tekshirib ko'ramiz
  return dioganal || rooh // agar ikkalasidan biri true bo'lsa true qaytadi aks holda false
}

module.exports = canCapture;
