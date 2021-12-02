let myName = prompt ('inserisci nome');
let mySurname = prompt ('inserisci cognome');
let myFavouriteColor = prompt ('inserisci il tuo colore preferito');
let createPassword = myName + mySurname + myFavouriteColor;

document.getElementById ('password'). innerHTML = createPassword + 21;

