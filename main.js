document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    
    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "mexican") {
        body.classList.add("mexican-theme");
    }
    
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("mexican-theme");
        
        // Save theme preference
        if (body.classList.contains("mexican-theme")) {
            localStorage.setItem("theme", "mexican");
        } else {
            localStorage.setItem("theme", "default");
        }
    });
});
