/*VARIABILI*/

/*COSTANTI*/
const form = document.getElementById('form');

const KmTravelled = form.querySelector('input[name ="km"]');
const AgeUtente = form.querySelector('input[name = "età"]');


let KmPrice = 0.21;
let TotalTicketPrice = (KmTravelled * KmPrice);

/*VARIABILI SCONTI */
let AdultDiscount = 0.40;
let MinorDiscount = 0.20;

/*MESSAGGIO*/
/*let messaggio = 'Prezzo del biglietto è: ';*/


const btnCalcola = document.getElementById('Calculate');
const btnCancella = document.getElementById('Cancel');

const messaggio = document.querySelector('.messaggio');

/*CONDIZIONALI*/

btnCalcola.addEventListener('click', function(){
    let età = AgeUtente.value;
    let km = KmTravelled.value;
    let KmPrice = 0.21;
    let TotalTicketPrice = km * KmPrice;
    messaggio.innerHTML +=`<h2>${TotalTicketPrice} &euro;</h2>`;
    messaggio.style.color = 'green';

    let AdultDiscount = 0.40;
    let MinorDiscount = 0.20;

    if(AgeUtente < 18) {
        messaggio += (TotalTicketPrice - MinorDiscount).toFixed(2) +' &euro;';
    }
    if(AgeUtente > 65) {
        messaggio+= (TotalTicketPrice - AdultDiscount).toFixed(2) +' &euro;';
    }
    else if ((AgeUtente >18) && (AgeUtente < 65)) {
        messaggio += (TotalTicketPrice).toFixed(2) +' &euro;';
    }
});
btnCancella.addEventListener('click', function(){
    AgeUtente.value= 0;
    KmTravelled.value = 0;
});

let inputs = document.getElementsByClassName('form-input');
for (var i =0; i< inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fisso');
        } else {
            this.nextElementSibling.classList.remove('fisso');
        }
    });
}