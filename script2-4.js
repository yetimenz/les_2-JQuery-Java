// script2-2.js
function welkomBericht() {
    var naam = prompt("Wat is uw naam?");
    var geboortejaar = prompt("Wat is uw geboortejaar?");
    var huidigeJaar = new Date().getFullYear();
    var leeftijd = huidigeJaar - geboortejaar;

    var welkomstzin = "Welkom, " + naam + "! Geboren in " + geboortejaar + ". Je bent nu " + leeftijd + " jaar oud.";
    var lengteZin = welkomstzin.length; // Berekent de lengte van de zin
    var positieN = welkomstzin.indexOf('n'); // Zoekt de positie van de letter 'n' in de zin

    document.getElementById('welkom').innerHTML = welkomstzin;
    console.log("De lengte van de zin is: " + lengteZin + " tekens.");
    console.log("De letter 'n' komt voor het eerst voor op positie: " + positieN);
}

welkomBericht();
