function alternatingCaps(str) {
  // Your code here.
  let result = [] // oldin javoblarni joylab borish uchun bir array ochamiz
  str.split('').map((e, i) => { // keyin str ni split qilib bo'laklarga bo'lib olamiz
    if(i % 2 === 0) {     // va map qilib indexni toq qadamini tekshiramiz
      result.push(e.toUpperCase())    // toq qadamlarda harflarni katta qilamiz
    } else {                          // va resultga push qilib boramiz
      result.push(e.toLowerCase())    // juft qadamlarni kichik harf qilamiz
    }                                 // va ularni ham push qilamiz
  })    
                   // keyin arrayni join bn hammasini yig'ib string qilib qaytaramiz
  return result.join('')   
}


module.exports = alternatingCaps;
