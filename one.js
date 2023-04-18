//print in java script
//console.log("Hello world");
//alert("alert is not used in modern JS")
//document.write("this is document write")

/*javascript console API
console.warn("we can give waring in console")
console.error("we can give error")
console.clear()*/

// javascript variables
//containers to store data values 

/*var num1 = 33; 
var num2 = 11;
var s = "sha"
console.log(num1 + num2 + s);*/

// we have two types of data types in javascript
// 1.primivitive data type :undefiened, null, number, string, bollean, symbol
// 2.Reference data types: Arrays and Objects

/* var str1 = "this is a string "
   var str2 = "this also a string"*/

// objects 
/* var marks = {
    sha: 90, 
    da: 85.9,
    c: "CA",
 }
 console.log(marks)*/

//booleans
// var a = true
// var b = false
// console.log( a,b);

// var und = undefined
// console.log(und)

// var n = null;
// console.log(n)

/*var arr = [1,2, "SD", 10.9, "ok"]
console.log(arr)
console.log(arr [1] )*/

//operators 
//Arithmetic operation
/*var a = 90
var b = 80
console.log("The value of a+b is", a+b)
console.log("The value of a-b is", a-b)
console.log("The value of a*b is", a*b)
console.log("The value of a/b is", a/b)
console.log("The value of a%b is", a%b)*/

//assignment operators
// var c = 7;
// c-=2
// console.log(c)

//comparision operators
// var x= 12
// var y= 2
// console.log(x>y)
// console.log(x<y)
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)

// logical operators
// AND operator
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

// OR operator
// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// logical Not
// console.log(!true)
// console.log(!false)

// functions
// function avg(a,b){
//    return(a+b)/2
// }
// c1 = avg(4,6)
// c2 = avg(24,16)
// console.log(c1, c2)

// var a = 10
// var b =15
// if(a>b){
//    console.log("a is greater than b")
// }
// else{
//    console.log("b is greater than a")
// }

// loop
//  let arr = [1, 2, 3, 4,5,6,7,8];
// console.log(arr)
// for(var i=0; i<arr.length; i++){
//    console.log(arr[i])
// }

// for iteration we can use forEach loop
// arr.forEach(function(element){
//    console.log(element);
// });

// const as = 0 //const will not change
let j = 0;
let arr = [1, 2, 3, 4,5,6,7,8];
// while(j<arr.length){
//    console.log(arr[j]);
//    j++;
// }

// do{
//    console.log(arr[j]);
//    j++;
// }while(j<arr.length);

// for(var i=0; i<arr.length; i++){
//    if(i==2){
//       break;
//    }
//    console.log(arr[i])
// }

// for(var i=0; i<arr.length; i++){
//    if(i==2){
//       continue; //continue means jispe rakhe usku chodo and next pe jao
//    }
//    console.log(arr[i])
// }

// let myArr = [ "I", "me", "myself", "11", null , true]

// array  methods

// console.log(myArr.length)
// myArr.pop([4])
// console.log(myArr)
// myArr.push("ok")
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// myArr.unshift()
// console.log(myArr)

// string methods in javascript
// let mystr= "I am a good person"
// console.log(mystr)
// console.log(mystr.length)
// console.log(mystr.indexOf("good"))
// console.log(mystr.lastIndexOf("good"))
// console.log(mystr.slice(7,11))
// console.log(mystr.replace("good" ," bad"))

// let myDate = new Date()
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())

// DOM manuplation
// DOM is document which is available 
// let elemclass = document.getElementsByClassName("container")
// document.getElementById('click').click()
// document.getElementById('click').style.broder = '2px solid blue'
// console.log(elemclass[0].innerHTML)
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "THIS IS A PARA"
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b')
// createdElement2.innerText = "this is another para"
// tn[0].replaceChild(createdElement2,   createdElement);
// append replace remove

// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

//functions in js
// function clicked(){
//    console.log('the button was clicked')
// }

// window.onload = function(){
//    console.log('the documentwas loaded')
// }

// firstcontainer.addEventListener('mouseover', function(){
//    console.log("Mouse on container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//    console.log("mouse out of container")
// })

//  arrow functions
// sum = (a,b)=>{
//    return a+b;
// }
         
// login = ()=>{
//    document.querySelectorAll('.container')[0].innerHTML = "<b> set interval fired<b>"
//    console.log("i am log in")
// }
// clr = setTimeout(login, 2000) // to stop just cleartimeout(clr)

/*local storage
(go to console of any web then application -->local storage)
in console we can store in local storage  
localstorage.setItem('name', 'sha')
localstorage
localstorage.getItem('name')
localstorage(clear)//to clear storage
 */