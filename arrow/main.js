function prezzoConIva(prezzo) {
    return prezzo * 122 / 100;
}
const prezzoConIvaArrow  = prezzo =>  prezzo * 122 / 100

const prezzo = 100;
const totaleConIva = prezzoConIva(prezzo);

console.log(totaleConIva);
console.log(prezzoConIvaArrow (100))