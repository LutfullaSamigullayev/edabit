function days(month, year) {
  // Your code here.
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // bu yerda oylarning kunlar sonini arr qilib saqlab qo'yamiz
    if (month === 2) { // agar kiritilga oy bo'lsa uni tekshiramiz
      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        // yil 4 bo'linsa va yil 100 ga bo'linmasa yoki 400 ga bo'linsa 
        return 29;  // bu yilgi fevral oyida 29 kun bor bo'ladi
      } else {
        return 28;  // aks holda 28 kun bor bo'ladi
      }
    } // agar fevral dan boshqa oy kiritilsa uning joylashgan indexi bo'yicha javob qaytaramiz
    return daysInMonth[month - 1];
}

module.exports = days;
