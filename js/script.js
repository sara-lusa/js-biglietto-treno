// Richieste all'utente
var kmUtente = parseInt(prompt('Quanti chilometri vuole percorrere?'));
var etaUtente = parseInt(prompt('Quanti anni ha?'));
console.log(kmUtente);
console.log(etaUtente);

// Calcolo prezzo totale km
var prezzoTot = kmUtente * 0.21;
console.log(prezzoTot);

// Calcolo prezzi scontati
var scontoMin = ( ( prezzoTot * 20 ) / 100 );
console.log(scontoMin);

var scontoOver = ( ( prezzoTot * 40 ) / 100 );
console.log(scontoOver);

// Prezzi scontati finali
var prezzoFinMin = prezzoTot - scontoMin;
console.log(prezzoFinMin);
var prezzoFinOver = prezzoTot - scontoOver;
console.log(prezzoFinOver);

// Condizioni
if ( etaUtente < 18 ) {
  document.getElementById('prezzo').innerHTML = 'Il tuo prezzo è ' + prezzoFinMin + ' €';
} else if ( etaUtente > 65 ) {
  document.getElementById('prezzo').innerHTML = 'Il tuo prezzo è ' + prezzoFinOver + ' €';
} else {
  document.getElementById('prezzo').innerHTML = 'Il tuo prezzo è ' + prezzoTot + ' €';
}
