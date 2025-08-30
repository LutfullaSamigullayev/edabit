function missingAngle(angle1, angle2) {
  // Your code here.
  // Uchinchi burchakni topamiz
  const c = 180 - (angle1 + angle2);

  // Burchakni tasniflaymiz
  if (c < 90) return "acute";
  if (c === 90) return "right";
  return "obtuse";
}

module.exports = missingAngle;
