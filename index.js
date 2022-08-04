const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    
})