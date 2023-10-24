//Parametrden daxil olan ededin faktorial qaytaran funksiya yaradin.
function myFunction(a){
    if(a<0){
        console.log("Menfi ededler ucun faktorial movcud deyil")
    }else if(a==0){
        console.log("Faktorial",`${a}`,`1e beraberdir.`)
    }else{
        let fact=1
        for(let i=1; i<=a; i++){
            fact*=i;
        }
        console.log("Faktorial",":",`${a}`,"!","=",`${fact}`);
        return a
    }
}
console.log(myFunction(7));