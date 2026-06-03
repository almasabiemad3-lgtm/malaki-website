document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        // إظهار أو إخفاء القائمة المنسدلة في الهاتف
        navLinks.classList.toggle("active");
        
        // تغيير أيقونة الزر
        const icon = menuToggle.querySelector('i');
        if(navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط
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
});
