//Massivde yerlesen en boyuk ve en kicik ededi tapin.
let arr=[3,1,6,2,9,10];
let enboyuk=arr[0];
let enkicik=arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i]>enboyuk){
        enboyuk=arr[i];
    }
    if(arr[i]<enkicik){
        enkicik=arr[i];
    }

}
console.log("En boyuk:",enboyuk);
console.log("En kicik:",enkicik);
    


// console.log("En boyuk:",X,"En kicik:",Y);

