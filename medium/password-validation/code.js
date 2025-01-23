function validatePassword(password) {
  // Your code here.
   if (password.length < 6 || password.length > 24) return false;
  // password ning uzunligi 6 dan kichik yoki 24 dan katta bo'lsa false qaytaradi

   if (!/[A-Z]/.test(password)) return false;
   // passwordda kamida bir ta katta harf bo'lishi kerak
   
   if (!/[a-z]/.test(password)) return false;
   // passwordda kamida bir ta kichik harf bo'lishi kerak
   
   if (!/[0-9]/.test(password)) return false;
   // passwordda kamida bir ta raqam bo'lishi kerak
   
   if (/(\w)\1\1/.test(password)) return false;
   // passwordda maksimum 2 ta takrorlanuvchi belgi bo'lishi kerak
   
   if (/[^a-zA-Z0-9!@#$%^&*()+=_\-{}\[\]:;”’?<>.,]/.test(password)) return false;
   // passwordda faqat belgilangan maxsus belgilar bo'lishi kerak
   
   return true; // Agar yuqoridagi shartlar barchasi bajarilsa true qaytaradi
}

module.exports = validatePassword;
