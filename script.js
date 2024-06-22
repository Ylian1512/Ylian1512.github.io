document.addEventListener('DOMContentLoaded', () => {
    loadCookies()

    ///////////////////////////////////////////////////////////////////////

});


// Functions
// Select Menus
function app_changeTheme() {
    const themeSelector = document.getElementById("sm-themeSelector");
    const selectedTheme = themeSelector.value;
    const themeLink = document.getElementById("theme");
    themeLink.href = selectedTheme;
    console.log(`[LOG] Thème changé en ${selectedTheme}`)
    setCookie('theme', `/themes/${selectedTheme}`, 365 * 3)
}

// Cookies
function loadCookies() {
    if (!getCookie("theme")) {
        setCookie("theme", "/themes/light.css", 365 * 3)
    }
}
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 86400000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
