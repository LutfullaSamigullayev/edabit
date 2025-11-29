function volumeOfBox(sizes) {
  // Your code here.
    // obyekt ichidan height, width va length qiymatlarini olamiz
    const { width, length, height } = sizes;

    // uchala o'lchamni ko'paytirib hajmni hisoblaymiz
    return width * length * height;
}

module.exports = volumeOfBox;
