function bell(num) {
  // Your code here.
  if (num === 0) return 1; // Agar x = 0 bo'lsa, natija har doim 1

  let bellTriangle = [[1]]; // Bell uchburchagini boshlash

  for (let i = 1; i <= num; i++) {
    let row = []; 
    row[0] = bellTriangle[i - 1][i - 1]; // Har bir satrning birinchi elementi oldingi satrning oxirgi elementi bilan teng
    
    for (let j = 1; j <= i; j++) {
      row[j] = row[j - 1] + bellTriangle[i - 1][j - 1]; // Har bir keyingi element chap tomondagi va oldingi satrdagi ustun yig'indisidan hosil bo'ladi
    }
    
    bellTriangle.push(row); // Yangi satrni uchburchakka qo'shamiz
  }
  
  return bellTriangle[num][0]; // Bell soni har doim uchburchakning chap tomoni bo'ylab joylashgan
}

module.exports = bell;
