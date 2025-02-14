document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        splashScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 3000); // Mampiseho ny main content rehefa afaka 3 segondra
});
