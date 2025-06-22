function evenOddPartition(arr) {
  // Your code here.

  const evens = [] // bu yerga juftlarni saqlab boramiz
  const odds = [] // bu yerga toqlarni saqlab boramiz

  arr.forEach(num => { // arr ni forEach qilib har bir raqamni tekshiramiz
    if(num % 2 === 0) { // agar raqamni 2 ga qoldiqli bo'lganda 0 ga teng bo'lsa 
      evens.push(num) // uni juftlarga massiviga push qilamiz
    } else { // aks holda toqlar massiviga push qilamiz
      odds.push(num)
    }
  })

  return [evens, odds] // ikkala massivni bir qilib yuboramiz
}

module.exports = evenOddPartition;
