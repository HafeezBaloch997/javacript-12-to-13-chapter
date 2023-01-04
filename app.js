// Chapter 11 to 12;


// Qno # 01;

// var char = prompt("enter a character");

// if (char === "A"){
//     document.write("A = 65");
// }
// else if (char === "Z"  ){
//     document.write("Z = 90");
// }


// else if (char === "a"  ){
//     document.write("a = 97");
// }

// else if (char === "z"){
//     document.write("z = 122");
// }
// else 
// document.write(" I dont found this charater code");

// Qno # 02;

//  var num1 = +prompt("enter a first number");
//  var num2 =+prompt("enter a first number");

//  if(num1 == num2){

//  document.write("your number is equal");
// }
//  else {

//  document.write("your number is not equal");
// }

// Qno # 03;

// var num = +prompt("Enter a number");

// if ( num == 0){
//     document.write("Your number is zero");
// }


// else if ( num > 0){
//     document.write("Your number is positive");
// }
// else{
//     document.write("Your number is negative");
// }

// Qno # 04;

// var char = prompt("Enter a vowels letter")

//  if ( char == "a" || char == "e" || char == "i" || char ==  "o" || char == "u"||
//  char == "A" || char == "E" || char == "I" || char ==  "O" || char == "U"){
//      document.write("true");
//  }
//  else {
//      document.write("false");
//  }

// Qno # 05;

// var your_pass = prompt("Please Enter a your password");

// if(your_pass === "hafeez"){
//     alert("your password is correct")
// }
// else{
//     alert("Incorrect password")
// }

// Qno # 06;

// var hour = +prompt("enter a hour");

// if (hour <= 18){
//     console.log("Good Day");
// }
// else {
// console("Good Evening");
// }


// Qno # 07;


var time = +prompt("enter a time ");

if(time  >=0000 && time < 1200 ){
    document.write("Good morning");
}
 else if(time  >=1200 && time < 1700 ){
    document.write("Good afternoon");
}

else if(time  >=1700 && time < 2100 ){
    document.write("Good evening");
}


else if(time  >=1200 && time < 2359 ){
    document.write("Good night");
}
else {
 alert("Your time is not in a our world watch");
}