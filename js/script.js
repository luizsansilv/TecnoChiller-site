document.addEventListener("DOMContentLoaded", () => {
   
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

    fetch(basePath + "components/menu.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("menu-container").innerHTML = data;

        const toggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    });

    fetch(basePath + "components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });

    const form = document.querySelector("form");
    const msg = document.querySelector(".form-sucesso");

    if (form && msg) {
        form.addEventListener("submit", function() {
            msg.style.display = "block";
    });

    }
});


