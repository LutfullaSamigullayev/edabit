function letterCheck(arr) {
  // Your code here.
  return arr[1].split('').every((i) => arr[0].toLowerCase().includes(i.toLowerCase()))
  // arr[1] ni split qilib so'zni harflarga ajatdik, keyin every qilib testladik,
  // har birini arr[0] element ichidan qidirdik ikkala tarafni ham kichik harflarga aylantirib,
  // agar barchasi testdan o'tsa true qaytaradi aks holda false
}
console.log(letterCheck(["trances", "nectar"]))

module.exports = letterCheck;
