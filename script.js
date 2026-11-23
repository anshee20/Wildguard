// Function to show a conservation message

function showMessage() {

    alert("Protect Wildlife, Preserve Nature! Every Species Matters.");

}

// Display current year in footer

document.addEventListener("DOMContentLoaded", function() {

    let year = document.getElementById("year");

    if (year) {
        year.innerText = new Date().getFullYear();
    }

});