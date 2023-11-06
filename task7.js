//Massivde yerlesen elementleri reverse eden funksiya yazin.
let arr=[1,3,6,7,2,9];
const reversedArr=[];

function func(){
    for(let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
}
func()
console.log(reversedArr)