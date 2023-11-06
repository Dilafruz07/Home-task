//Massivde false deyimli (undefined,null,false ve s. )elementleri silib yeni massiv qaytaran funk-
//siya yazin.
let arr=[4,false,"xengel",null,7];
let a=[];  //a=qalanlar
let b=[];  //b=silinenler
for(let i=0; i<arr.length;i++){
    if(arr[i]){
        a.push(arr[i]);
    }else{
        b.push(arr[i]);
    }
}
console.log(a);
console.log(b);