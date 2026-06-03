document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle Logic
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        // إضافة أو إزالة كلاس active لإظهار/إخفاء القائمة في الهواتف
        navLinks.classList.toggle("active");
        
        // تغيير الأيقونة بين القائمة الجانبية (Bars) وزر الإغلاق (X)
        const icon = menuToggle.querySelector('i');
        if(navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط بداخلها
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector('i');
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    // 2. Smooth Scrolling Effect
    // أضفنا التمرير السلس في الـ CSS (scroll-behavior: smooth)، 
    // ولكن يمكن إضافة تأثيرات إضافية هنا عند الحاجة مستقبلاً.
});