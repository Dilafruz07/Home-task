//person adli,saheleri name,surname olan obyektde getFullName adli bir funksiya yaradib name+surna-
//me qaytarsin.
const person={
    name:"Dilefruz",
    surname:"Memmedova",
    getFullName(){
        return this.name+" "+ this.surname
    }
}
console.log(person.getFullName())