// 3
var baris=3;
var polaBintang= "*";
var polaSamaDengan= "=";
var hasil = "";

for (let index = 1; index<6; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log("" +hasil);

hasil= "";

for (let index = 1; index<4; index++){
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(" " +hasil);
console.log("  "+polaBintang);

// 5
var baris=5;
var polaBintang= "*";
var polaSamaDengan= "=";
var hasil =  "";

for (let index =1 ; index<10; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil= " ";

for (let index = 1; index<8; index++){
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil="  ";
for (let index = 1; index<6; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);

hasil="   ";
for (let index = 1; index<4; index++){
   
    if((index %2)==0){
        hasil = hasil.concat(polaSamaDengan);
    } else {
        hasil = hasil.concat(polaBintang);
    }

}
console.log(hasil);
console.log("    "+polaBintang);