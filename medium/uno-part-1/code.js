function canPlay(hand, face) {
  // Your code here.
  const arr = hand.join(' ').split(' ') 
  // hand ni bo'sh joylar bilan qo'shib yana bo'sh joylar bilan bo'laklarga aylantiramiz
  const res = face.split(' ').filter(e => arr.includes(e))
  // face ni bo'sh jo'ylar orqali bo'laklarga bo'lib hand ni ichida borlarini filterlab o'tiramiz
  return res.length ? true : false // agar res ning uzunligi bo'lsa true aks holda false qaytaramiz
}

module.exports = canPlay;
