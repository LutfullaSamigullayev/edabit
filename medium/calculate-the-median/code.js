function median(arr) {
  // Your code here.
  let newarr = arr.sort((a,b)=> a-b) // oldin arr ni sortlab olamiz
  if(newarr.length % 2){  // agar uning uzinligi toq to'lsa
    return newarr[(newarr.length-1)/2]  // uning o'rtadagi elementini qaytaramiz
  } else { // aks ho'lda o'rtadagi 2 ta elenementning o'rta arifmetigini chiqaramiz
    return (newarr[newarr.length / 2] + newarr[newarr.length / 2 - 1]) / 2 
  }
   
}
console.log(median([342, 98, 5456, 32, 786, 432, 890, 321]))

module.exports = median;
