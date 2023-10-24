//Parametrlerden n ededini qebul eden ve n-ci Fibonacci sayini qaytaran funksiya yazin.(rekursiya)
function fib(n){
    let a=1;
    let b=2;
    for(let i=3;i<=n;i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return b;
}
console.log(fib(4))