//Ededlerden ibaret obyekt yaradin ve butun value-larin cenmini console cixardin.
const obj={
    num1:7,
    num2:3,
    num3:9,
    num4:5,
};
let sum=0;
 
for (key in obj){
    sum=sum+obj[key];
//eyer console logu iceride yazsaq sira ile topluyub ekrana cixaracaq 7 10 19 24 seklinde
}
console.log(sum);