//5 deqiqeye kimi islkeyen saniye olcen yazin.Onluq eded olduqda qarsisina 0 elave edib console ci-
//xarin.Vaxt sayimi kodun run olunan vaxtdan sonra baslamalidir.Meselen: Hal-hazirda vaxt 19:10:05-
//dir. Sayim 10:05 den baslayib 15:05de bitmelidir.
let second=0;
let minute=0;
let count=0;
function func(){
    console.log("min",minute,"sec",second);
    count++;
    second++;
    if(second==60){
        minute++;
        second=0;
    }
    if(count==300){
        clearInterval(intervalId);
    }
}
let intervalId=setInterval(func,1000);