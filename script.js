function toggleAbout() {
    var about = document.getElementById("about");

    if (about.style.display === "none" || about.style.display === "") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}