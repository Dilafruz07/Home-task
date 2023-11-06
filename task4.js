//Massivde yerlesen butun tek ve cut edelerin ayri massivlerde yazin.Meselen[12345]->
//[1,3,5] ve [2,4].
let arr=[2,7,8,4,3,1,9,];
let cut=[];
let tek=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        cut.push(arr[i])

    }else{
        tek.push(arr[i])

    }
    
}
console.log("Cut:",cut);
console.log("Tek:",tek);