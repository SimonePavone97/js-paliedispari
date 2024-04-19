document.addEventListener("DOMContentLoaded", function() {
    const playBtn = document.getElementById('play-btn');
    const choiceSelect = document.getElementById('choice');
    const numberInput = document.getElementById('number');
    const resultDiv = document.getElementById('result');

    playBtn.addEventListener('click', function() {
        // Recupera i valori scelti dall'utente
        const userChoice = choiceSelect.value;
        const userNumber = parseInt(numberInput.value);

        // Validazione dei campi
        if (userChoice !== "pari" && userChoice !== "dispari") {
            alert("Per favore, scegli 'pari' o 'dispari'.");
            return;
        }

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
            alert("Per favore, inserisci un numero da 1 a 5.");
            return;
        }

        // Genera un numero random per il computer
        const computerNumber = numeroRandom(1, 5);

        // Calcola la somma dei due numeri
        const sum = userNumber + computerNumber;

        // Stabilisce se la somma è pari o dispari
        const isSumEven = isEven(sum);

        // Dichiarazione del risultato
        let resultText = "";
        if ((userChoice === "pari" && isSumEven) || (userChoice === "dispari" && !isSumEven)) {
            resultText = "Hai vinto!";
            window.location = "https://www.youtube.com/watch?v=hnAnUtUq_FA&ab_channel=SuperSardus8";
        } else {
            resultText = "Hai perso!";
            window.location = "https://www.youtube.com/watch?v=_bckcpIUBo8&ab_channel=TheRealBrendon";
        }

        // Visualizza il risultato
        resultDiv.textContent = resultText;
    });

    // Funzione per generare un numero random tra min e max
    function numeroRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Funzione per determinare se un numero è pari o dispari
    function isEven(number) {
        return number % 2 === 0;
    }
});
