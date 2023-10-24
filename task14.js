// Verilmish ededin en boyuk bolenini tapib console cixardin.
const num=72;

let digit=0;
for(let i=0;i<72;i++){
    if(!(num%i)){
        digit=i;
    }
}
console.log(digit)