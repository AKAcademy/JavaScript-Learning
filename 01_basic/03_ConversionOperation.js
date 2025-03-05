let score = 45

console.log(typeof(score))


// both are same 


console.log(typeof score);

//Ans yes it is number 

// but 


let score1 = "45abc"


console.log(typeof score1);

// Ans yes it is String  BECAUSE WE USE "" 


// but if we convert it in number 


let score2 =Number(score1)


console.log(typeof score2);  
 

// it gives number in result

// BUT WHAT HAPPEND IF SOMEONE ENTERED 4556asd like that 

let score3 = "45abc"
let score4 =Number(score3)

console.log(typeof score4); 

// then it gives again in number value
// 

// But if we print the converted number 
console.log(score4);

// It gives NaN that means not a number 


// But if the value is null



let score5 = null
let score6 =Number(score3)

console.log(typeof score6); 

// it gives number let check the numbrer 

console.log(score6);

// RESULT 
// "432"=> 432


let isloogedIn = 1
let booleanisloggedIn= Boolean(isloogedIn)
console.log(booleanisloggedIn);

// result 1==> true

let islooged = 0
let booleanislogged= Boolean(islooged)
console.log(booleanislogged);
// result 0==false

// same as we can change the in string 


//***********************************operation********************************


let value =4
let negvalue= -value
console.log(negvalue)

console.log(2+4);
console.log(2-4);
console.log(2*4);
console.log(2/4);
console.log(2**4);
console.log(6%4);




//now add the str1+str2

let str1 = "Abhay"
let str2 = " chaudhary"
let str3 = str1 + str2

console.log(str3);


//now*******************************


console.log("1" +2);                   // Ans==> 12

console.log("1" +2+2);                 // Ans==> 122
                                                   // If the string is in first then all
                                                   // are treated as string 
console.log(1 +"2");                   // Ans==> 12

console.log(1 +2+"2");                 // Ans==> 32





let countergame=100
++countergame;
console.log(countergame);


let game=100
game++;
console.log(game);














