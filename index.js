console.log("Fuck You world 2");
let pname="Pranto";
let lastName='dev';
// using let we declare variables in js 
console.log(pname,lastName);
const age=23;
console.log(age);
// we declare constant using const
//dynamic language , type of a variable is decided at runtime using "typeof" we can determine type :3  
//primitive / value types of Js 'undefined','null', 'integer'....
let ud=undefined;
let nl=null;
// objects in Js
let person={
   name :'prova',
   age:30,
   height:5.2
};
console.log(person);
person.name='Prova Rani Dev';
person['height']=5.3;
console.log(person);

// arrays in js 
let colors=['red','green','blue'];
colors[3]=2;
console.log(colors); 
// function in Js
function naman(name){
    console.log("Namasker "+name);

}
naman("Pranto Dev"); 