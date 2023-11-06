//Her hansisa bir obyekt yaradib onun key ve value bir setrde consoole cixardin.Meselen, Neticede
//"key:name, value:Cavid".
const person={
    name:"Dilefruz",
    age:19,
};

for(key in person) {
    console.log('key:',key,'value:',person[key]);
}