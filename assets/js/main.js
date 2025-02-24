// ===============================================================
// Achivements Counter Section scroll amination er jonno
// ===============================================================

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Change animation speed if needed

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-targert");
            let count = 0;
            const increment = target / speed;
            
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".achivement-counter"));
});