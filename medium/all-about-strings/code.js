function allAboutStrings(str) {
  // Your code here.
  let result = [];
  result.push(str.length);   //1. uzunlik
  result.push(str[0]);      //2. birinchi belgi
  result.push(str[str.length - 1]);   //3. oxirgi belgi
  result.push(                        //4. o'rtasini topish   
    str.length % 2             // agar toq bo'lsa birinchi qism ishlaydi 
      ? str[((str.length - 1) / 2)]   // uzunlikidan 1-ayiramiz butun son chiqishi uchun keyin 2 ga bo'lib o'rtasini topamiz
      : str.substr((str.length / 2 - 1), 2)   //uzunlikini 2ga bo'lib 1 qadam orqaga qaytib 2 ta belgini qaytaramiz
  );                          // 5. find da biz 1-indexda turgan belgi 2-marta qayerda takrorlanganini topamiz 
  const find = str.indexOf(str[1], str.indexOf(str[1]) + 1)       // agar taktorlanmagan bo'lsa -1 qaytaradi
  result.push(find > 0 ? `@ index ${find}` : "not found");        // agar bor bo'lsa uning indexsini qaytaradi
  return result;          // find 0 dan katta bo'lsa uning indexini push qilamiz aks holda not found deb qaytaramiz
}

module.exports = allAboutStrings;
