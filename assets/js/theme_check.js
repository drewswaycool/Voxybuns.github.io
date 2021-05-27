function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme !== null && localStorageTheme === "dark") {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");
    }
}
(function() {
    checkTheme()
})();