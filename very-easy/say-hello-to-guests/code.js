function greetPeople(names) {
  // Your code here.
  // names array ni map orqali har bir ism oldiga hello qo'shib
  // hosil bo'lgan yangi array ni join orqali orasiga vargul va bosh joy qo'yib
  // string qilib return qilamiz
  return names.map(name => "Hello " + name).join(", ")
}

module.exports = greetPeople;
