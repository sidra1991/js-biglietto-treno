let eta = prompt ('quanti anni ai?');
document.write (eta);

let km = prompt ('quanto devi viagiare in km?');
document.write (km);

const costo = 0.21;

if (eta < 18){
let minorenne= ((costo / 100) * 20) - costo;
document.write (minorenne * km)
}else if (eta > 60){
    let pensionato= ((costo / 100) * 40) - costo;
    document.write (pensionato * km)
}else {
    document.write (costo * km)
}


