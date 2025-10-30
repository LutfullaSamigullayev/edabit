function nameShuffle(str) {
  // Your code here.
  // ism va familiyani bo'sh joydan ajratamiz
  const parts = str.split(' ');

  // joylarini almashtirib, qayta birlashtiramiz
  return `${parts[1]} ${parts[0]}`;
}

module.exports = nameShuffle;
