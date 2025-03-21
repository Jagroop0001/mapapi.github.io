
///////////////////////////////////////////////
// inspect restrictions
///////////////////////////////////////////////


document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey && (e.key === "u" || e.key === "U") || // Disable Ctrl+U (View Source)
        e.ctrlKey && e.shiftKey && (e.key === "i" || e.key === "I") || // Disable Ctrl+Shift+I (DevTools)
        e.ctrlKey && e.shiftKey && (e.key === "j" || e.key === "J") || // Disable Ctrl+Shift+J (Console)
        e.ctrlKey && (e.key === "s" || e.key === "S") || // Disable Ctrl+S (Save Page)
        e.key === "F12" // Disable F12 (DevTools)
    ) {
        e.preventDefault();
    }
});

