/* GIOCO DEI DADI

TO DO LIST:
1 Generare un numero da 1 a 6 sia per il giocatore che per il computer.
2 Recupera gli elementi del DOM.
3 Stabilire chi vince in base al numero più alto.
4 Dichiarare il vincitore in pagina
*/ 

//Recupero elementi del DOM
const displayResult = document.getElementById("game")

//Lancio dei dadi

const playerNumber = Math.floor(Math.random(1) * 6 ) + 1;
const computerNumber = Math.floor(Math.random(1) * 6 ) + 1;
console.log('Il tuo punteggio è:', playerNumber)
console.log('Il punteggio del computer è: ', computerNumber )

//Messaggio di vittoria o sconfitta
let message = 'Pareggio!'

if (playerNumber > computerNumber){
message = 'Hai vinto!'
} else if (playerNumber < computerNumber){
    message = 'Hai perso!'
}

console.log(message)


//Inserimento nel DOM
displayResult.outerHTML = 
`Il tuo risultato è: ${playerNumber} <br> Il risultato del computer è: ${computerNumber} <br> ${message}`