let myName = prompt ('inserisci nome');
let mySurname = prompt ('inserisci cognome');
let myFavouriteColor = prompt ('inserisci il tuo colore preferito');
let myAge = prompt ('inserisci la tua età');
let createPassword = myName + mySurname + myFavouriteColor + myAge;

document.getElementById ('password'). innerHTML = createPassword;

