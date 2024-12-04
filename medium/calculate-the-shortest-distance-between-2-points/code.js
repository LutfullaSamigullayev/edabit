function shortestDistance(str) {
  // Your code here.
  let arr = str.split(',') // str ni , lar orqali bo'laklarga bo'lib olamiz
  let d = Math.sqrt(((+arr[3] - +arr[1])**2) + ((+arr[2] - +arr[0])**2)) // Yevklid masofa formulasi
  if(Number.isInteger(d)) { // agar javob butun son bo'lsa 
    return d  // uning o'zini return qilamiz 
  } else return +d.toFixed(2) // aks holda uni 2 onlik raqamgach yaxlitlab return qilamiz
}

module.exports = shortestDistance;
