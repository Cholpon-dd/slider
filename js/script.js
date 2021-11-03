
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
   
    slides.forEach((slide) => slide.style.display = "none");
   
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    dots.forEach((dot) => dot.className = dot.className.replace(" active", ""));
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000)
}