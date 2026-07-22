const maxOfTwoNumbers= function (a,b){


if(a>=b){
  return a;
}

else{
  return b;
};
};

console.log('Exercise 1 result when numbers are 2 and 7 is :    '+ maxOfTwoNumbers(2,7));
console.log('Exercise 1 result when numbers are 150 and 33 is :    '+ maxOfTwoNumbers(150,33));
console.log("_____________________________");

const isAdult= function(number){

  if(number>=18){
    return "adult";
  }

  else{
    return "minor";
  }
}

console.log("Exercise 2 answer when age is 12: "+isAdult(12));
console.log("Exercise 2 answer when age is 50: "+isAdult(50));
console.log("_____________________________");


const isCharAVowel= function(char){
  if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
      char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
return true;
  }

  else{
    return false;
  }
}
console.log('Exercise 3 Result when char is a :', isCharAVowel("a"));
console.log('Exercise 3 Result when char is c :', isCharAVowel("c"));
console.log("_____________________________");

const generateEmail= function(name,domain){
  return name+"@"+domain;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log("_____________________________");


const greetUser=function(username,timeOftheDay){
  if(timeOftheDay=="morning" || timeOftheDay== "Morning" ){
return "Good morning "+username+"!";
  }

  else if(timeOftheDay=="evening" || timeOftheDay== "Evening" ){
return "Good evening "+username+"!";
  }

 else if(timeOftheDay=="night" || timeOftheDay== "Night" ){
return "Good night "+username+"!";
 }

else{
  return null;
}

}
console.log('Exercise 5 Result for morning:', greetUser("Sam", "morning"));
console.log('Exercise 5 Result for evening:', greetUser("Sam", "evening"));
console.log('Exercise 5 Result for night:', greetUser("Sam", "night"));
console.log("_____________________________");



const maxOfThree= function(Num1,Num2,Num3){
   if (Num1 >= Num2 && Num1 >= Num3) {
    return Num1;
  } else if (Num2 >= Num1 && Num2 >= Num3) {
    return Num2;
  } else {
    return Num3;
  }

}

console.log('Exercise 6 Result when numbers are (5,10,8):', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result when numbers are (20,29,33):', maxOfThree(20, 29, 33));
console.log('Exercise 6 Result when numbers are (0,7,55):', maxOfThree(0, 7, 55));
console.log("_____________________________");



const calculateTip= function(billAmount,TipPercentage){
tipAmount=billAmount*(TipPercentage/100)
  return Math.trunc(tipAmount) +"BD"

}
console.log('Exercise 7 Result when bill is 100BD and 20% tip:', calculateTip(100, 20));
console.log('Exercise 7 Result when bill is 350BD and 20% tip:', calculateTip(350, 20));
console.log("_____________________________");

