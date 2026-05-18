document.addEventListener("DOMContentLoaded", () => {

    const isGitHubPages = window.location.hostname.includes("github.io");
    const isInPageFolder = window.location.pathname.includes("/pages/");

    const basePath = isGitHubPages
        ? "/TecnoChiller-Website-Redesign/"
        : isInPageFolder ? "../" : "./";
       

    fetch(basePath + "components/menu.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

        // Corrige os caminhos dinamicamente após injetar
        document.querySelectorAll("#menu-container a").forEach(link => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("http")) {
                link.setAttribute("href", basePath + href);
            }
        });

        document.querySelector("#menu-container img")?.setAttribute(
            "src", basePath + "assets/img/logo-tecno.png"
        );

            const toggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");

            if (toggle && navLinks) {
                toggle.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }
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


