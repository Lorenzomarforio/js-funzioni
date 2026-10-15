function mediaStudente (voto1, voto2, voto3) {
return  (voto1 + voto2 + voto3) / 3;

}
function calcSuff(voto) {
    return voto>=6;
}
const media = mediaStudente (5, 6 , 6)
const promosso = mediaStudente (media)

if (promosso) {
    console.log (`Promosso con media ${media}`)
}
else {
    console.log(`Bocciato con media ${media}`)
}
