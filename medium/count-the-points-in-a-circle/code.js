function pointsInCircle(points, centerX, centerY, radius) {
  // Your code here.
  let res = 0 // bu yerga javoblarni saqlab boramiz
  points.forEach(point =>  { // keyin points ni forEach qilib har birini formulaga qo'yib chiqamiz
    (point.x - centerX)**2 + (point.y - centerY)**2 < radius**2 ? res++ : null
    // agar formula sharti bajarilsa res ni 1 ga oshiramiz aks holda hechnima qilmaymiz
  }) // keyin res ni return qilamiz
  return res
}

module.exports = pointsInCircle;
