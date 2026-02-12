const burger = document.querySelector(".burger")
const navLinks = document.querySelector(".nav-links")
const navLinks_p = document.querySelector(".nav-links_p")

let menuOpen = false;

burger.addEventListener("click", () => {
    if (menuOpen == false){
        navLinks.style.display = "block";
        menuOpen = true;
        burger.classList.toggle("active");
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
        burger.classList.toggle("active");
    }

});

burger.addEventListener("click", () => {
    if (menuOpen == false){
        navLinks_p.style.display = "block";
        menuOpen = true;
        burger.classList.toggle("active");
    }
    else if (menuOpen == true) {
        navLinks_p.style.display = "none";
        menuOpen = false;
        burger.classList.toggle("active");
    }

});