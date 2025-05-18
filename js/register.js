// register.js
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // تحقق من تطابق كلمة المرور وتأكيد كلمة المرور
    if (password !== confirmPassword) {
      document.getElementById("error-message").textContent =
        "كلمة المرور وتأكيد كلمة المرور غير متطابقين";
      return;
    }

    if (username && password) {
      // تخزين بيانات المستخدم في localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("تم إنشاء الحساب بنجاح!");
      window.location.href = "user.html"; // التوجيه إلى صفحة تسجيل الدخول بعد التسجيل
    } else {
      document.getElementById("error-message").textContent =
        "يرجى ملء جميع الحقول";
    }
  });
