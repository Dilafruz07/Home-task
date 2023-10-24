//Ikireqemli ededin herfi tesvirini console cixarin.Meselen, "25" daxil etdikde cosole 
//"iyirmi besh", "13" ise "on uch" cixaracaq.
let num=81;

const second=num%10
const first=num-second
let result="";

if(first===10){
    result="on"
}
else if(first===20){
    result="iyirmi"
}
else if(first===30){
    result="otuz"
}
else if(first===40){
    result="qirx"
}
else if(first===50){
    result="elli"
}
else if(first===60){
    result="altmish"
}
else if(first===70){
    result="yetmish"
}
else if(first===80){
    result="seksen"
}
else if(first===90){
    result="doxsan"
}
if(second===1){
    result=result+" " +"bir"
}
if(second===2){
    result=result+" " +"iki"
}
if(second===3){
    result=result+" " +"uch"
}
if(second===4){
    result=result+" " +"dord"
}
if(second===5){
    result=result+" " +"besh"
}
if(second===6){
    result=result+" " +"alti"
}
if(second===7){
    result=result+" "+"yeddi"
}
if(second===8){
    result=result+" " +"sekkiz"
}
if(second===9){
    result=result+" " +"doqquz"
}
console.log(result)