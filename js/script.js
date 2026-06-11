const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "Light";
    }

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        darkModeBtn.textContent = isDark ? "Light" : "Dark";
    });
}
