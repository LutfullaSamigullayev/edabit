function formatNum(num) {
  let str = String(num);  // Sonni stringga aylantiramiz
  let result = ''; // bu yerga javob ni saqlab boramiz
  let count = 0;  // bu yerda vergulni qayerga qo'yishni hisoblab boramiz
  // Raqamlarni oxiridan boshlab for qilamiz
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;  // oxirgi raqamdan qo'shib boramiz
    count++; // for har ishlaganda 1 ga oshirib boramiz
    // Har 3 raqamda vergul qo'shamiz
    if (count % 3 === 0 && i !== 0) { 
      //agar count 3 ga qoldiqsiz bo'linsa va i 0-index bo'lmasa
      result = ',' + result; // result ga ',' qo'shamiz
    }
  }
  return result;
}

module.exports = formatNum;
