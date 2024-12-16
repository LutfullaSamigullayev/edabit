function factorize(num) {
  // Your code here.
  const factors = [] // bu yerga num ni qaysi sonlarga bo'lsa bo'ladiganini qo'shib boramiz
  for(let i = 1; i <= num; i++) { // 1 da num gacha foq qilamiz
    if(num % i === 0) { // agar num ni kelgan songa bo'lganda 0 chiqsa
      factors.push(i) // uni factors ga push qilib boramiz
    }
  } 
  return factors  // keyin factors ni return qilamiz
}

module.exports = factorize;
