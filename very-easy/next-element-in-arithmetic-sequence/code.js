function nextElement(arr) {
  // Your code here.
   // Birinchi ikki elementdan farqni topamiz
   const diff = arr[1] - arr[0];

   // Oxirgi elementga shu farqni qo‘shamiz
   return arr[arr.length - 1] + diff;
}

module.exports = nextElement;
