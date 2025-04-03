function cleanUp(files, sort) {
  // Your code here.
  let groupedFiles = {};

  for (let file of files) {
    let [name, ext] = file.split("."); // Fayl nomini va kengaytmasini ajratamiz
    let key = sort === "prefix" ? name : ext; // "prefix" bo‘lsa nom, "suffix" bo‘lsa kengaytma
    
    if (!groupedFiles[key]) {
      groupedFiles[key] = []; // Agar bu guruh hali yo‘q bo‘lsa, yangi massiv yaratamiz
    }
    groupedFiles[key].push(file); // Faylni tegishli guruhga qo‘shamiz
  }

  return Object.values(groupedFiles); // Natijani massiv shaklida qaytaramiz
}

module.exports = cleanUp;
