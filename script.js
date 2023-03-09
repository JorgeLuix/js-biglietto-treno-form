/*VARIABILI*/

/*COSTANTI*/

const KmTravelled = form.querySelector('input[name ="età"]');
const AgeUtente = form.querySelector('input[name = "km"]');

let KmPrice = 0.21;
let TotalTicketPrice = (KmTravelled * KmPrice);

/*VARIABILI SCONTI */
let AdultDiscount = 0.40;
let MinorDiscount = 0.20;

/*MESSAGGIO*/
let message = 'Prezzo del biglietto è: ';

/*CONDIZIONALI*/
if(AgeUtente < 18) {
    message += (TotalTicketPrice - (TotalTicketPrice * MinorDiscount)).toFixed(2) +' &euro;';
}
if(AgeUtente > 65) {
    message+= (TotalTicketPrice - (TotalTicketPrice * AdultDiscount)).toFixed(2) +' &euro;';
}
else if ((AgeUtente >18) && (AgeUtente < 65)) {
    message += (TotalTicketPrice).toFixed(2) +' &euro;';
}
document.getElementById('messaggio').innerHTML =

 `<p>${message}</p>`;