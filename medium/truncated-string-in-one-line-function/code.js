function truncate(txt, txt_length, txt_suffix) {
  // Your code here.
  if(txt_suffix) { // agar qo'shimcha so'z bo'lsa 
    const leng = txt_length - txt_suffix.length // uning uznligini olib tashlaymiz
    return (txt.slice(0, leng) + txt_suffix)
    // va yangi uzunlik bo'yicha yangi matnga qo'shimcha so'zni qo'shamiz return qilamiz
  } else { // aks holda qo'shimcha so'z bo'lamsa
    return txt.slice(0,txt_length) // uzunlik bo'yicha kesilgan yangi matnni return qilamiz
  }
}

module.exports = truncate;
