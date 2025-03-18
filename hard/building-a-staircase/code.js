function buildStaircase(height, block) {
  // Your code here.
  let staircase = []; // bu yerga javoblarni push qilib boramiz
    
    for (let i = 1; i <= height; i++) { // height bo'yicha for qilamiz
        let row = Array(height).fill("_"); 
        // Array(heigth) berib shu uzunlik bo'yicha yangi bo'sh array hosil qilamiz
        // fill orqali ichini "_" - bilan to'ldiramiz
        row.fill(block, 0, i); 
        // keyin hosil bo'lagan arrayni fill orqali 0-indexdan boshlab i-indexgacha
        // kerakli blok bilan to'ldiramiz
        staircase.push(row); // hosil bo'lgan arrayni push qilamiz
    }
    
    return staircase; // va natijani retun qilamiz
}

module.exports = buildStaircase;
