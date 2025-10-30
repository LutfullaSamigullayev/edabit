function equalSlices(total, people, each) {
  // Your code here.
  // Agar odam bo'lmasa, pirogni bo'lish shart emas
  if (people === 0) return true;

  // Har bir odamga beriladigan jami bo'laklar sonini hisoblaymiz
  const needed = people * each;

  // Agar jami bo'laklar yetarli bo'lsa, true qaytaramiz
  return needed <= total;
}

module.exports = equalSlices;
