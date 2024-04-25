//Ternary Operator SUBIDO A GITHUB
const age = 30;
age >= 18 ? console.log (`I like to drink wine`) :
console.log (`I like to drink water`);
// The Ternary Operator if the statement is true will be executed */

const drink =  age>=18 ? 'wineee' : 'wataaar' ;
console.log (drink);
console.log (`I like to drink ${age>=18 ? 'wineee' : 'wataaar' }`)


const bill=parseInt(prompt("Register your bill here:"));
const tip= (bill*0.15) ;
var bill_tip= (bill*1.15);
bill < 49 ? console.log (`Your bill is ${bill} and your tip is ${tip}. Your total is ${bill+tip} dollars`):
console.log (`Your bill is ${bill} and your tip is ${bill*0.2}. Your total is ${bill+(bill*0.20)} dollars`)
