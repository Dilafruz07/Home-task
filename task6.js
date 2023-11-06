//Obyektin her hansisa bir sahesinin olub olmadigini yoxluyan bir funksiya yazin. 
const person={
    name:"Dilefruz",
    age:20,
    course:3,
};
function checking(key){
    if(person[key]){
        return true
    }else{
        return false
    }
}
console.log(checking('name',person))