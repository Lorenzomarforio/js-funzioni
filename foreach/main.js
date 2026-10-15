
////////////////////////////////////////////////////////////////////
const numeri = [50, 59, 90]
let numeroPiuGrandeTrovato = 0;
for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i]

    if (numero > numeroPiuGrandeTrovato) {
        numeroPiuGrandeTrovato = numero
    }

    console.log(numeroPiuGrandeTrovato)
}
