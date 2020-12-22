// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriPc = [];
var numeriUtente = [];



while (numeriPc.length < 16){ // fino a quando la lunghezza di numeriPc è inferiore a 16
  var numeri = generaNumero(1,100); // genera un numero da 1 a 100
  if (numeriPc.includes(numeri) == false){ // se il numero non è uguale a quello generato
    numeriPc.push(numeri);// allora pushalo nell'array
  }
}

console.log(numeriPc);// vedi se non esplode il mondo

while (numeriUtente.length < 16){ // fino a quando la lunghezza di numeriUtente è inferiore a 16
  var numeriPlayer = parseInt(prompt('inserisci un numero da 1 a 100')); // chiedi di inserire un numero da 1 a 100
  if (numeriUtente.includes(numeriPlayer) == false){ // se il numero non è uguale a quello già inserito
    numeriUtente.push(numeriPlayer);// allora pushalo nell'array
  } else {
    alert('hai un problema!');
  }
}

console.log(numeriUtente);// vedi se non esplode il mondo


// funzioni

function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}