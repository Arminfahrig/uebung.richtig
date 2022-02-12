let beliebigerString = "Das Ergebnis ist zu klein";
let eineZahl = 5;
let nochEineZahl = 1;
let ergebnis
let eineZahlmitKomma = 18.2;

function rechenspiele() {
    ergebnis = eineZahl * nochEineZahl
    if (ergebnis > eineZahlmitKomma)
    {
        console.log(ergebnis - eineZahlmitKomma)
    } else {
        console.log(beliebigerString)
    }
}

function ungerade(Ende){
    for( let i = 1;
      i < Ende ; i  = i + 2)
 console.log( i )
}

let exo = 1;
let ind = 1;
let erg;
function fibonacci() {
    while (ind - exo < 500)
    {erg = exo + ind
    exo = ind
        ind = erg
    console.log(erg)
    }

        }