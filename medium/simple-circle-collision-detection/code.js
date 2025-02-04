function isCircleCollision(c1, c2) {
  // Your code here.
  const r1 = c1[0] // birinchi doiraning radiusi
  const x1 = c1[1] // x o'qi bo'yicha koordinatasi
  const y1 = c1[2] // y o'qi bo'yicha koordinatasi
  
  const r2 = c2[0] // ikkinchi doiraning radiusi
  const x2 = c2[1] // x o'qi bo'yicha koordinatasi
  const y2 = c2[2] // y o'qi bo'yicha koordinatasi
  
  const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
  // Masofani topish fo'rmiulasi
  
  return distance <= r1 + r2 
  // masofa radiuslar yig'indisidan kichik yoki teng bo'lsa doiralar kesishadi
}

module.exports = isCircleCollision;
