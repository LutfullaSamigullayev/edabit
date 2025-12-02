function asciiSort(arr) {
  // Your code here.
  // So‘zning ASCII yig‘indisini hisoblaydigan yordamchi funksiya
  function asciiSum(word) {
    let sum = 0;

    for (let char of word) {
      sum += char.charCodeAt(0); // har bir harfning ASCII kodi
    }

    return sum;
  }

  // Ikki so‘zning ASCII yig‘indilarini solishtiramiz
  return asciiSum(arr[0]) < asciiSum(arr[1]) ? arr[0] : arr[1];
}

module.exports = asciiSort;
