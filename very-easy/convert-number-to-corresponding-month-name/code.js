function month_name(num) {
  // Your code here.
  // 12 ta oy nomini arrayda saqlaymiz
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Index 0 dan boshlanadi, shuning uchun 1 ni ayrib olamiz
  return months[num - 1];
}

module.exports = month_name;
