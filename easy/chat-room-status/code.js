function chatroomStatus(users) {
  // Your code here.
  // Agar chat bo'sh bo'lsa
  if (users.length === 0) {
    return "no one online";
  }

  // Agar 1 ta foydalanuvchi bo'lsa
  if (users.length === 1) {
    return users[0] + " online";
  }

  // Agar 2 ta foydalanuvchi bo'lsa
  if (users.length === 2) {
    return users[0] + " and " + users[1] + " online";
  }

  // Agar 2 tadan ko'p foydalanuvchi bo'lsa
  return (
    users[0] +
    ", " +
    users[1] +
    " and " +
    (users.length - 2) +
    " more online"
  );
}

module.exports = chatroomStatus;
