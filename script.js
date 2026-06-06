(function () {
  "use strict";

  // Mobile menu toggle
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Dynamic year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Reviews
  const reviews = [
    { name: "أحمد العمري", text: "تجربة رائعة، السلتة بطعم البيت تماماً. أنصح بشدة!", initial: "أ" },
    { name: "سارة المقطري", text: "أجواء راقية وخدمة ممتازة، قسم العائلات مريح جداً.", initial: "س" },
    { name: "محمد الحاج", text: "المندي لذيذ والتوصيل سريع. سأكرر الطلب بالتأكيد.", initial: "م" },
  ];

  const grid = document.getElementById("reviewsGrid");
  if (grid && !grid.childElementCount) {
    grid.innerHTML = reviews
      .map(
        (r) =>
          `<div class="review">` +
          `<div class="stars">${"<i class='fa-solid fa-star'></i>".repeat(5)}</div>` +
          `<blockquote>"${r.text}"</blockquote>` +
          `<div class="review-author">` +
          `<span class="review-avatar">${r.initial}</span>` +
          `<span class="review-name">${r.name}</span>` +
          `</div></div>`,
      )
      .join("");
  }
})();
