function numberOfDays(coordinate) {
  let x = coordinate[0];
  let y = coordinate[1];
  // Harakatlar sonini hisoblash
  let totalMoves = Math.abs(x) + Math.abs(y);
  // Dam olish kunlarini hisoblash (5 kunda 1 kun dam olish)
  let restDays = (totalMoves / 5);
  // Agar dam olish kuni yetib borgan borgan bo'lsa 1 ta dam olish kunini qo'shmaymiz
  let delDays = Math.floor(restDays) - (restDays % 1);
  // Umumiy kunlarni hisoblash
  let totalDays =
    totalMoves +
    (restDays === delDays ? Math.floor(restDays) - 1 : Math.floor(restDays));

  return totalDays;
}

console.log(numberOfDays([10, 10]));

module.exports = numberOfDays;
