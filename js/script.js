// Richieste all'utente
var kmUtente = parseInt(prompt('Quanti chilometri vuole percorrere?'));
var etaUtente = parseInt(prompt('Quanti anni ha?'));

// Risultati Possibili
if ( isNaN(kmUtente) || isNaN(etaUtente) ) {
  alert('Errore: Il numero che hai digitato non è valido.')
  var prezzoTot = 'Prezzo non disponibile';
  document.getElementById('prezzo').innerHTML = prezzoTot;

} else {
  // Calcolo prezzo totale km
  var prezzoTot = kmUtente * 0.21;

  // Calcolo sconti
  var scontoMin = ( ( prezzoTot * 20 ) / 100 );
  var scontoOver = ( ( prezzoTot * 40 ) / 100 );

  // Calcolo prezzi scontati
  var prezzoFinMin = prezzoTot - scontoMin;
  var prezzoFinOver = prezzoTot - scontoOver;

  // Condizioni
  if ( etaUtente < 18 ) {
    document.getElementById('prezzo').innerHTML = 'Il prezzo finale del tuo biglietto è di ' + prezzoFinMin + ' €';
  } else if ( etaUtente > 65 ) {
    document.getElementById('prezzo').innerHTML = 'Il prezzo finale del tuo biglietto è di ' + prezzoFinOver + ' €';
  } else {
    document.getElementById('prezzo').innerHTML = 'Il prezzo finale del tuo biglietto è di ' + prezzoTot + ' €';
  }

}
