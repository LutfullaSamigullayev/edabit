function leaderboards(users) {
  // Your code here.
  const trueScore = (people => people.score + people.reputation * 2)
  // bu funksiya orqali trueScore ni hisoblaymiz
  return users.sort((user, user2) => trueScore(user2) - trueScore(user))
  // sort orqali katta Srore ga ega bo'lganni oldinga o'tirib chiqamiz
}

module.exports = leaderboards;
