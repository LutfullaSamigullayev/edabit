function coneVolume(h, r) {
  // Your code here.
  // Konus hajmi formulasi: (1/3) * π * r**2 * h
  return Number(((1/3) * Math.PI * r**2 * h).toFixed(2))
  // (1/3 * Math.PI * r**2 * h) - konus hajmini hisoblash
  // toFixed(2) - natijani 2 xonali kasr qismigacha yaxlitlaydi 
  // va string ko'rinishida return qiladi 
  // Number() orqali javobni Number tipiga o'tkazamiz
}

module.exports = coneVolume;
