function checkerBoard(n, el1, el2) {
  // Your code here.
  if(el1 == el2) return 'invalid'
  
  let board = []; // doska arrayini yaratamiz
  for (let i = 0; i < n; i++) { // n gacha sikl aylantiramiz
    let row = []; // qatorlarni yaratamiz
    for (let j = 0; j < n; j++) { // n gacha sikl aylantiramiz
      // (i + j) yig‘indisi juft bo‘lsa el1, aks holda el2
      row.push((i + j) % 2 === 0 ? el1 : el2); // row ga push qilamiz
    }
    board.push(row); // hosil bo'lgan qatorni board ga push qilamiz
  }
  return board; // board ni return qilamiz
}


module.exports = checkerBoard;
