// عرض الصفحة المطلوبة وإخفاء الباقي
function showPage(page) {
    let sections = document.querySelectorAll("section");
    sections.forEach(function (sec) {
        sec.classList.remove("active");
    });
    document.getElementById(page).classList.add("active");
}

// تسجيل الدخول
function login() {
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";

    document.getElementById("guestMenu").style.display = "none";
    document.getElementById("userMenu").style.display = "block";

    showPage("home");
    alert("تم تسجيل الدخول بنجاح");
}

// تسجيل الخروج
function logout() {
    document.getElementById("guestMenu").style.display = "block";
    document.getElementById("userMenu").style.display = "none";

    showPage("login");
    alert("تم تسجيل الخروج");
}

// إنشاء حساب جديد
function registerUser() {
    document.getElementById("registerName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";

    alert("تم إنشاء الحساب بنجاح");
    showPage("login");
}

// رفع محاضرة (تجريبي)
function uploadLecture() {
    alert("سيتم ربط رفع الملفات بـ PHP لاحقاً");
}
