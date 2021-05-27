
const themeSwitcher = document.getElementById("theme_switcher");
themeSwitcher.checked = false;
function clickHandler() {
    if (this.checked) {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light_theme");
        document.body.classList.remove("dark_theme");
        localStorage.setItem("theme", "light");
    }
}
themeSwitcher.addEventListener("click", clickHandler);

function applyTheme() {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme !== null && localStorageTheme === "dark") {
        const themeSwitcher = document.getElementById("theme_switcher");
        themeSwitcher.checked = true;
    }
}
(function() {
    applyTheme()
})();
