//Parametrlerden gelen intervalda yerlesen ededleri funksiya ile console cixardin.(rekursiya)
function ourFunction(a,b){
    if(a<=b){
        console.log(a+1);
        a++;
        ourFunction(a,b);
    }
    return 'Finsh'
}
console.log(ourFunction(1,7));