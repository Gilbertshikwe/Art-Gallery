/*
let user1 = myFunction("Gilbert","Shikwe")
function myFunction(a , b){
    return a + " " + b ;
}
console.log(user1)

function myFunction(x,y=40){
    return x * y ;
}
console.log(myFunction(5))

let global1 = myFunction("I am global")
function myFunction(k){
    return k ;
}
console.log(global1)

let j = 18;
if(j < 12){
    console.log("good morning")
}
else{
    console.log("Good Evening")
}
const person = {firstName:"Gilbert", lastName:"Shikwe", age:26,fullName:function(){
    return this.firstName + " " + this.lastName
}
}
console.log(person.fullName())

function myFunction(r,t){
    return r*t
}
let s = myFunction(700,5)
console.log(s)

const age = 40
const agemessage = age >= 30 ? "We ni mzee bana tafuta bwana" : "Msichana type yangu"
console.log(agemessage)


const names = ["Gilbert","Robert","Joseph","Hill"]
let text = ""
for (let i = 0;i<names.length;i++){
    text += names[i]
}
names.push("Elicah")
console.log(text)




// let text1 = ""
//for (let i = 0; i<20 ; i++){
  //  text1 +=  i ;
//}
//console.log(text1)

//let text1 = ""
//let i = 0
//while(i < 20){
  //  text1 += i;
    //i++;
//}
//console.log(text1 + "<br>")

const person = {firstname:"Gilbert", lastname:"Shikwe",age:28}
let text = " "
for (let x in person){
  text += person[x] + " "
}
console.log(text)

// let alert1 = document.getElementById("Button")
function btnclick() {
  alert("Mbwa wewe")
}
*/
/*const name1 = new Map([
    ["Elikah",30],
    ["Shikuku",60]
])
let text =""
for (const x of name1){
    text+= x
}
console.log(text)
let num1 = 31
let num2 = 2
let multiply = num1 * num2
console.log(multiply)
let random = Math.floor(Math.random()*1000) + 1
console.log(random)

let sign = prompt("What's your sign?");

if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}
console.log(sign)*/
// Function declaration
let message;
message = "Hello"
console.log(message)
const person = "Gilbert Shikwe"
console.log(person)
let admin, name;
name = "John"
admin = name
console.log(admin)
// Function declaration
function greetings(){
    let car = "Mercedes"
    console.log ("Hello, Mr.Gilbert Shikwe. Where is your" + " " + car + "?")
}
greetings()
// using parameters
function helloGuys(name1,name2,name3,name4){
    console.log(`Hello ${name1},${name2},${name3}, and ${name4}. How are you doing today?`)
}
helloGuys('Alice','Bob', 'Charlie', 'David')
helloGuys('Elicah','George','Mercy','Gerald')
helloGuys("Gil","Rob")
 function getNumber(){
    return "We can do this!"
 }
 let result = getNumber()
 console.log(result)
// using parameters in function
 function calcSum(a,b){
    return a + b
 }
 let result2 = calcSum(500,600)
 console.log(result2)
// using return value example1
 let sayHi = function(){
    console.log("Hello Mrs.Christopher")
 }
 let func = sayHi()
 sayHi()
// Using return value example2
 let greet = function(){
    return "Niaje Msupa!!"
 }
 let result3 = greet()
 console.log(result3)
 /*// Callback functions
 function printMessage(callback){
    console.log("Operation Loading...")
    setTimeout(() => {
        callback("Operation Complete")    
    }, 10);
 }
 //Defining the callback function
 function callback(result4) {
    console.log("Result:" +" "+ result4)
 }
 printMessage(callback)*/

// Write a programme that outputs ticket printing at a Bank.
function ticketPrinting(callback){
    console.log("Your Ticket is Printing")
    setTimeout(() => {
        callback("Your Ticket is already Printed, Check the drawer")
    },1);
}
// defining the callback function
function ticketresult(result5){
    console.log("Alert!!:" +" "+result5)
}
ticketPrinting(ticketresult)

let sayHello = function(name){
    console.log(`Hello ${name}`)
}
sayHello("John Omollo Kamau Kinuthia")

/*let age = 66
//conditionally declare a function
if (age > 70){ 
    function karibu(){
    return "Kuja Uchukue Malipo Ya Wazee Kwa Chief!"
} 
} else {
    function karibu(){
    return "Bado Una Nguvu Kijana!"
}
}
let result6 = karibu()
console.log(result6)*/
let age = 44
let karibuMzee = (age > 50) ?
function() {console.log("Enda Retire Mzee")}:
function() {console.log("Kijana, Ekelea Kazi Kama Wakadinali")}
karibuMzee()

let ingiaLibrary = function(Jina,Place){
    return `Wewe ${Jina} Ripa na M-pesa ama urudi kwa ${Place}`
}
let result7 = ingiaLibrary("Gilbert Imbaya Shikwe","Mama Yako")
console.log(result7)

let multiply = (a,b) => a * b
console.log(multiply(5,476))

let schedule = () =>  "Tufike ivyo Buru"
console.log(schedule())


let schedule2 = function(){
    console.log("Leo lazima Nifike Library")
}
schedule2()

function schedule3(event){
    return `Acha Nifike Ivi ${event}`
}
let result8 = schedule3("Rong Festival")
console.log(result8)
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(100, 260) ); // 3






