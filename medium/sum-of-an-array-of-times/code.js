function timeSum(times) {
  // Your code here.
  // Berilgan vaqtlarni soniyalarga aylantiruvchi yordamchi funksiya
  function formatSeconds(time) {
    const [h, m, s] = time.split(":").map(Number);
    // Soat, daqiqa va soniyalarni ajratib olish va soniyalarga aylantirish
    const res = h * 3600 + m * 60 + s;
    return res;
  }

  // Har bir vaqtni soniyalarga aylantirib, summ massiviga yig'ish
  const summ = times.map((str) => formatSeconds(str));

  // summ massivining elementlarini yig'indisini qaytarish
  const totalSecond = summ.reduce((a, b) => a + b, 0);

  // Yig'indini soat, daqiqa va soniyalarga aylantirish
  let hour = Math.floor(totalSecond / 3600); // To'liq soatlarni hisoblash
  let minute = Math.floor((totalSecond % 3600) / 60); // Qolgan soniyalardan to'liq daqiqalarni hisoblash
  let second = totalSecond % 60; // Qolgan soniyalarni hisoblash

  // Natijani formatlash
  const formatTime = [hour, minute, second];

  return formatTime;
}

module.exports = timeSum;
