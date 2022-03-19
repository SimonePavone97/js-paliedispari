// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// chiedo all'utente se sceglie pari o dispari
let tocco = prompt(`Pari o Dispari?`);
console.log(tocco);



// chiedo all'utente di darmi un numero da 1 a 5
let numeroUtente = parseInt(prompt(`inserisci un numero da 1 a 5!`));
console.log(numeroUtente);


// sviluppo la funzione per dare un numero random al pc
function numeroRandom(min, max) {
    let numeroPC = (Math.floor(Math.random() * max) + min );
    return numeroPc;
}
let numeroPc = (1,5);
console.log(numeroPc);


// sommo i due numeri, utente + pc
let somma = ( numeroUtente + numeroRandom(1, 5) );
console.log(somma);



// sviluppo la funzione del pari e dispari
function isEven (somma) {
    if ( somma % 2 == 0 ){

        return true; // è pari

    } else {

        return false; // è dispari
        
    }
}
console.log(isEven(somma));


// dichiariamo se abbiamo vinto o meno
if ( tocco === "pari" && isEven(somma) === true ) {
    
    console.log(`Hai vinto!`);
    alert(`Hai vinto`);
    window.location = "https://www.youtube.com/watch?v=hnAnUtUq_FA&ab_channel=SuperSardus8";

}

if (tocco === "dispari" && isEven(somma) === false ) {
    
    console.log(`Hai vinto!`);
    alert(`Hai vinto!`);
    window.location = "https://www.youtube.com/watch?v=hnAnUtUq_FA&ab_channel=SuperSardus8";

}

if 
   (tocco === "pari" && isEven(somma) === false ) {

    console.log(`Hai perso!`);
    alert(`Hai perso!`);
    window.location = "https://www.youtube.com/watch?v=_bckcpIUBo8&ab_channel=TheRealBrendon";

}

if (tocco === "dispari" && isEven(somma) === true ) {

    console.log(`Hai perso!`);
    alert(`Hai perso!`);
    window.location = "https://www.youtube.com/watch?v=_bckcpIUBo8&ab_channel=TheRealBrendon";

}