function cons(arr) {
  // Your code here.
  const newarr =  arr.sort((a,b) => (a-b)) // oldin arrni so'rtlab olamiz
  // keyin newarr ni every qilib xar birini tekshiramiz 
  return newarr.every((num, i, arr) => { //num, index, va arr ni olamiz
    if(i+1 != newarr.length){ // agar bu oxirgi element bo'lmasa uni tekshiramiz
     return (num + 1) === arr[i+1]  //kelgan num ga 1 ni qo'shib ozidan oldingai num ni tengligini tekshiramiz
    } else {  // agar teng bo'lsa true qaytaradi
      return true // agar u oxirgi element bo'lsa uni tekshirmay true qaytaradi
    }
}) // agar barchasi shartni bajarsa true qaytaradi 
}

module.exports = cons;
