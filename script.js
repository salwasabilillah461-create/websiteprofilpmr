    function sapaPengunjung() {
    alert("Selamat datang di website PMR!");
}
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


// Fitur klik foto untuk memperbesar
document.querySelectorAll(".gallery-item img").forEach(function(img) {
    img.addEventListener("click", function() {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0, 0, 0, 0.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "pointer";
const tombolTutup = document.createElement("div");
tombolTutup.innerHTML = "✕";
tombolTutup.style.position = "absolute";
tombolTutup.style.top = "20px";
tombolTutup.style.right = "20px";
tombolTutup.style.color = "white";
tombolTutup.style.fontSize = "32px";
tombolTutup.style.fontWeight = "bold";
tombolTutup.style.cursor = "pointer";
tombolTutup.style.zIndex = "10000";

overlay.appendChild(tombolTutup);

tombolTutup.addEventListener("click", function(event) {
    event.stopPropagation();
    overlay.remove();
});
        const gambar = document.createElement("img");
        gambar.src = img.src;
        gambar.style.maxWidth = "95%";
        gambar.style.maxHeight = "90%";
        gambar.style.objectFit = "contain";
        gambar.style.borderRadius = "10px";

        overlay.appendChild(gambar);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function() {
            overlay.remove();
        });
    });
});