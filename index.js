window.scrollTo(0, 0)

document.addEventListener("DOMContentLoaded", function () {
    const fadeDiv = document.querySelector(".homeintro-text");
    
    setTimeout(function () {
        fadeDiv.style.opacity = "1";
        fadeDiv.style.transform = "translateY(0)";
    }, 100); // Adjust the delay as needed
});