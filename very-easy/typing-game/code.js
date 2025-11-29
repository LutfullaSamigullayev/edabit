function correctStream(user, correct) {
  // Your code here.
  let result = [];

  // Har bir indeks bo'yicha taqqoslaymiz
  for (let i = 0; i < user.length; i++) {
    if (user[i] === correct[i]) {
      result.push(1);   // to'g'ri yozilgan
    } else {
      result.push(-1);  // noto'g'ri yozilgan
    }
  }

  return result;
}

module.exports = correctStream;
