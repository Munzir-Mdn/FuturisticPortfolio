document.addEventListener("DOMContentLoaded", () => {
  // Counter animation
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = 20;
      if (count < target) {
        counter.innerText = Math.ceil(count + target / speed);
        setTimeout(update, 50);
      }
    };
    update();
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });
  document.querySelectorAll("section").forEach(el => observer.observe(el));
});
