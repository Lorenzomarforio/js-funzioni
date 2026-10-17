const numeri = [2, 4, 7]
const esistonoNumeriDispari = numeri.some(numero => isFinite(numero/2 )) //oppure % 2 !==0 (si chiama remainder) oppure isFinite oppure %2
console.log(esistonoNumeriDispari)