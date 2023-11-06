//Massivde yerlesen ededleri boyukden kiciye, kicikden boyuye cesidliyin.
let arr=[2,1,3,6,4,8,5];
for(let i=0;i<arr.length;i++){
    for(let d=0;d<arr.length;d++){
        if(arr[i]>arr[d]){
            let boyuk=arr[i];
            let kicik=arr[d];
            arr[i]=kicik;
            arr[d]=boyuk;

        }
    }
}
console.log("arr",arr);

