// login.js
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // استرجاع بيانات المستخدم المخزنة في localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // التحقق من اسم المستخدم وكلمة المرور
    if (username === storedUsername && password === storedPassword) {
      alert("تم تسجيل الدخول بنجاح!");
      window.location.href = "home.html"; // التوجيه إلى الصفحة الرئيسية بعد النجاح في تسجيل الدخول
    } else {
      document.getElementById("error-message").textContent =
        "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
  });
