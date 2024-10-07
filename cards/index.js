const slides = document.querySelectorAll(".slide");
for (const slide of slides) {
    slide.addEventListener("click", (e) => {
        clearActiveClasses();
        slide.classList.add("active");
    });
}
function clearActiveClasses() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
}
