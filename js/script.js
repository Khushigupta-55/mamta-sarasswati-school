console.log("Mamta Saraswati Balika Vidya Mandir Website Loaded");

const contactForm = document.getElementById("contactForm");

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){
    menuToggle.addEventListener("click", function(){
        navbar.classList.toggle("active");
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You! Your message has been submitted successfully.");

        contactForm.reset();

    });
}


const elements = document.querySelectorAll("section, .academic-box, .infrastructure-box, footer");

elements.forEach((el) => {
    el.classList.add("animate");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.1
});

elements.forEach((el) => {
    observer.observe(el);
});