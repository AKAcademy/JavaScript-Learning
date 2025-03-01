const name = "Abhay"

const repocount =  45

console.log(name + repocount);// not good 

console.log(`hello my name is ${name} and my repo is in number ${repocount}`);// that is good way

const gameNmae = new String('Abhay')
console.log(gameNmae);
console.log(gameNmae[3]); // Access the key value pair Ans is 'a'

console.log(gameNmae.__proto__);

console.log(gameNmae.length)


console.log(gameNmae.toUpperCase());


console.log(gameNmae.charAt(3));

console.log(gameNmae.indexOf('y'));


let Name = "Abhay chaudhary"

let newString = Name.substring(0,7)
console.log(newString);

let name2 = "chaudhary"
let newString2 = name2.slice(-4 , 5)

console.log(newString2);

const String4 = "   Abhay    "
console.log(String4);
console.log(String4.trim());


const url = "https://Abhay.  com"

console.log(url.replace('%20','_'));
