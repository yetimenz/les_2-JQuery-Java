// script2-1.js
function welkomBericht() {
    var naam = prompt("Wat is uw naam?");
    var geboortejaar = prompt("Wat is uw geboortejaar?");
    var welkomstzin = "Welkom, " + naam + "! Geboren in " + geboortejaar + ".";
    document.getElementById('welkom').innerHTML = welkomstzin;
}

welkomBericht();
