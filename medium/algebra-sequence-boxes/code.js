function boxSeq(step) {
  let boxes = 0;  // Boshlang'ich 0 ta quti
    
    for (let i = 1; i <= step; i++) {
      console.log(boxes)
        if (i % 2 !== 0) {  // Agar qadam toq bo'lsa
            boxes += 3;
        } else {  // Agar qadam juft bo'lsa
            boxes -= 1;
        }
    }
    
    return boxes;
}

module.exports = boxSeq;
