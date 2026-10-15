function calcolaSconto (prezzo ) {
return prezzo * 0.9 ;   
}
const calcolaSconto = prezzo => prezzo * 0.9
const prezzoTastiera = 100;
const prezzoTastieraScontato = calcolaSconto(prezzoTastiera);
console.log(`La tastiera costa ${prezzoTastiera}€ ma lo pagherai solo ${prezzoTastieraScontato}€`);


