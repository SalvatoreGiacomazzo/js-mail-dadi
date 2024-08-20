/*TODO LIST
1. Crea un array di email autorizzate all'accesso.
2. Raccogli la mail inviata dall'utente nel form.
3. Se la email inserita dall'utente corrisponde a una delle mail nell'array, consentigli l'accesso, altrimenti negaglielo.
4. Stampa il messaggio di accesso negato o consentito.
 */ 

//Raccolta Elementi dal DOM 
const emailForm = document.getElementById('insert')
const outcomeEmail = document.getElementById('outcome')
const form = document.getElementById('form')

//Creazione array delle mail autorizzate
const allowedEmail = ['aceattorney@gmail.com', 'yakuza@libero.it', 'discoelysium@yahoo.it'];



//Eventi
form.addEventListener('submit', function (event) {
event.preventDefault();

//Raccolta email
const email = emailForm.value.trim()
console.log(email)


//Generazione messaggio giusto
let accessGranted = false;
console.log(accessGranted)
let message = 'Accesso negato'


//Controllo se la email è una delle email consentite
for (let i = 0; i < allowedEmail.length; i++ ) {
    const mailValidator = allowedEmail[i];
console.log(mailValidator)

 if(email === mailValidator) {
    let accessGranted = true
    let message = 'Accesso consentito'
 }
 
}



outcomeEmail.innerText = message 
})
