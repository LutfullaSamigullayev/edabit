function isEvenOrOdd(num) {
  // Your code here.
  if(num % 2 === 0) { // agar num ni 2 ga qoldiqli bo'lganda
    return "even" // qoldiq 0 ga teng bo'lsa demak u juft
  } else return "odd" // aks holda u toq 
}

module.exports = isEvenOrOdd;
