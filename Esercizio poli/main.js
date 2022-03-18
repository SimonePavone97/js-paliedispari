/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

var parola = 'osso';

var parolaInversa = prompt("Inserisci parola")

//var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}
