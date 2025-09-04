function nthSmallest(arr, n) {
  // Your code here.
    // Massivni tartiblaymiz
    const sorted = arr.sort((a, b) => a - b);

    // Agar n massiv uzunligidan katta bo‘lsa, null qaytaramiz
    if (n - 1 > sorted.length) return null;
  
    // n-chi eng kichik elementni qaytaramiz
    return sorted[n - 1]
}

module.exports = nthSmallest;
