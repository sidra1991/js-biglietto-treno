let eta = prompt ('quanti anni ai?');
let km = prompt ('quanto devi viagiare in km?');
const costo = 0.21;
const minorenne =  costo - (costo * 0.2);
const pensionato = costo - (costo * 0.4);

if ( eta <= 18 ){
   document.getElementById(`costoDefinitivo`).innerHTML= (minorenne * km).toFixed(2) ;
} else if ( eta >= 65){
    document.getElementById(`costoDefinitivo`).innerHTML=(pensionato * km).toFixed(2) ;
}  else {
    document.getElementById(`costoDefinitivo`).innerHTML=(costo * km).toFixed(2) ;
}




