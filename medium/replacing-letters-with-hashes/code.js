function replace(str, r) {
  // Your code here.
  const reg = `[${r}]` // r ni [] qavs ichiga joylashtirish
  const regex = new RegExp(reg, 'g') // reg ni global qilib regex ga aylantirish
  const result = str.replace(regex, "#") // regex ni # bilan almashtirish
  return result //result ni return qilamiz
}

module.exports = replace;
