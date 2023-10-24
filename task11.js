//Ededin "sade" ve ya "murekkeb" oldugunu tapib console cixarin.Meselen,"13"
//console-da "13 sade ededdir"
//sade 1 ve 13

//murekkeb 1 ve ozunden basqa edede bolunurse

let a=47;
let count=0;

for( let i=2; i<a; i++) {
    if(a%i===0) {
        count++;
    }
}

if(count===0) {
    console.log(a,'sadedir');
} else {
    console.log(a,'murekkeb');
}
