/*VARIABILI*/

/*COSTANTI*/
const formulario = document.getElementById('form');
const KmTravelled = form.querySelector('input[name ="km"]');
const AgeUtente = form.querySelector('input[name = "age"]');


const btnCalcola = document.getElementById('Calculate');
const btnCancella = document.getElementById('Cancel');

const messaggio = document.querySelector('.messaggio');

/*CONDIZIONALI*/

btnCalcola.addEventListener('click', function(){
    let AgeUser = AgeUtente.value;
    let km = KmTravelled.value;
    let KmPrice = 0.21;
    let TotalTicketPrice = (km * KmPrice).toFixed(2);
    let DiscountUnder = ((TotalTicketPrice) * 0.20).toFixed(2);
    let DiscountSenior = ((TotalTicketPrice) * 0.40).toFixed(2); 
    let priceDiscountUnder = ((TotalTicketPrice) - DiscountUnder).toFixed(2);
    let priceDiscountSenior = ((TotalTicketPrice) - DiscountSenior).toFixed(2);

    
   if(AgeUser < 18) {
    TotalTicketPrice = priceDiscountUnder;
    messaggio.innerHTML +=`<h2>${priceDiscountUnder} &euro;</h2>`;
    }
    if(AgeUser > 65) {
        TotalTicketPrice = priceDiscountSenior;
        messaggio.innerHTML +=`<h2>${priceDiscountSenior} &euro;</h2>`;
    }
    else if ((AgeUser >= 18) && (AgeUser <= 65)) {
       TotalTicketPrice;
       messaggio.innerHTML +=`<h2>${TotalTicketPrice} &euro;</h2>`;
    }
    
    messaggio.style.color = 'green';


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
