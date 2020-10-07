var baris = 5;
var polaPlus = "+";
var polaDollar = "$";
var hasil = "";

for (let indexx = 1; indexx < 10; indexx++) {
	if ((indexx %2)===0) {
	hasil = hasil.concat(polaDollar);
	} else { 
	hasil = hasil.concat(polaPlus);
	}
}
console.log(""+hasil);

hasil="";
for (let indexx = 1; indexx < 8; indexx++) {
	if ((indexx %2)===0) {
	hasil = hasil.concat(polaDollar);
	} else { 
	hasil = hasil.concat(polaPlus);
	}
}
console.log(" "+hasil);

hasil="";
for (let indexx = 1; indexx < 6; indexx++) {
	if ((indexx %2)===0) {
	hasil = hasil.concat(polaDollar);
	} else { 
	hasil = hasil.concat(polaPlus);
	}
}
console.log("  "+hasil);

hasil="";
for (let indexx = 1; indexx <4; indexx++) {
	if ((indexx %2)===0) {
	hasil = hasil.concat(polaDollar);
	} else { 
	hasil = hasil.concat(polaPlus);
	}
}
console.log("   "+hasil);
console.log("    "+polaDollar);