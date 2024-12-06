// script2-2.js
function welkomBericht() {
    var naam = prompt("Wat is uw naam?");
    var geboortejaar = prompt("Wat is uw geboortejaar?");
    var huidigeJaar = new Date().getFullYear();
    var leeftijd = huidigeJaar - geboortejaar;

    var welkomstzin = "Welkom, " + naam + "! Geboren in " + geboortejaar + ". Je bent nu " + leeftijd + " jaar oud.";
    document.getElementById('welkom').innerHTML = welkomstzin;
}

welkomBericht();
