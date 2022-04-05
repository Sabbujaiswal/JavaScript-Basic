// alert("Welcome to Js");
//prompt("fuck You!") this will give proper msg with input option
// document.getElementById("h").innerHTML="sabbu";
// document.write("jack-sparrow");
// console.log("M jinda hu")  //this will print on consol

// var a;
// a=5;
// alert(a);  // this will popup 5

// var variable declare krne k lie hota but ab iska use kam krte h kyu k ES6 updated 
// version m const and let ka use krte h js m for declaring variable

// let digit1=5;
// let x=6;
// let z =x+digit1;
// console.log(z);

// const ko change ni kr skte afte delaring it ;
let m; //variable assgn kie h//let m ="mohan" aise v likh skte h
m="jack";
console.log(m);
//let m; sifr declare krke agr consol.log(m) krenge to undefine aayega out put kyu k hmne value define hi ni kiya h

let k =20;
let b=3;
let j =k%b;
console.log(j)   //% ka use remender nikalne k lie krte h .....
 //x+=2=>x=nx+2 the way it can be use for all operter like devide ,multiply and minus

//  let x =5; //number
//  let y ='5' //string
//  console.log(x+y);  //out put will be 55

 let s='ambika'
 let n='jaiswal'
 console.log(s+ " "+n)

//  let x = 5     //find 5 power 2=5**2=5*5
//  let y =5**2
//  console.log(y);

//typeof operator k aage jo likha hota h uska datatype batata h ---------->>>>>>>>>>>>
// let x =typeof 20;
// console.log(x);   // out put is number;

// let x= "jack"
// console.log(`hello sabbu ${x}`);
// alert(`hello sabbu ${x}`);

//== ye data type ni dekhta k string h ya integr compare kr deta h aur === ye data type v dekhta h agr match krega to true otherwise false value dega ---->>>
// let x=8;
// let y=8;
// console.log(x==y);   //output --->>true

// let x=8;  //number
// let y='8';  //string
// console.log(x==y)   //output is true

// let x =8;
// let y =8;
// console.log(x===y);   //true

// let x =8;  //number
// let y ='8'; //string
// console.log(x===y);  ///false

//logic buliding if and else----->>>.
// let age=18;
// let hasVoterId="yes";
// if(age>=18 && hasVoterId=="yes"){
// alert("You can vote")
// }else{
//     alert("you can not vote");
// }

// let age=18;
// let hasVoterId="yes";
// if(age>=20 && hasVoterId=="yes"){
// alert("You can vote")
// }else if(age>=18 && hasVoterId!="no"){
// alert("give ur vote")
// }
// else{
//     alert("you can not vote");
// }

//nested if else condition----->>>>>>
// let age=18;
//  let hasVoterId="yes";
//  if (age>=16) {
//      alert("please vote");
//      if (hasVoterId!="yes") {
//        alert("fuck-Off")  
//      }else{
//          alert("welcome jack")
//      }
//  }else{
//      alert("You can not vote")
//  }

//make variable and print login if 1 logout if zero;
// let loggedin=1;
// if(loggedin==0){
// document.write("LogOut")
// }else{
//     document.write("Login")
// }


// Q.if input=1,"y","yes"  out put should be continue.... and if input=0,"n","no" then out put should be End....
// let input;
// input="n";
// if(input===1){
// document.write("continue.......")
// }else if(input==="y"){
// document.write("continue......")
// }else if(input==="yes"){
// document.write("continue.....")
// }else if(input===0){
//     document.write("End.......")
// }else if(input==="n"){
//     document.write("End.......")
// }
// else if(input==="no"){
//     document.write("End.......")
// }else{ 
//     alert("chala ja bsdk")
// }

// shortcut.......>>>>>>>
// let input;
// input=1;
// if(input===1|| input==="y" || input==="yes"){
//     document.write("continue........")
// }else if(input===0||input==="n"||input==="no"){
//     document.write("End.......")
// }else{
//     document.write("No entry")
// }


//same question with switch conditon(switch conditon only === comperator pr kam karta h)------>>>>>>>>
// let input;
// input="n";
// switch(input){
//     case 1:  //if(input===1)
//     document.write("continue........")
//     break;
//     case "y":
//         document.write("lauta ja...");
//         break;
//         case "yes":
//             document.write("mat jaa......")
//             break;
//             case 0:
//                 document.write("End....")
//                 break;
//                 case "n":
//                     document.write("Tata bye bye")
//                     break;
//                     case "no":
//                         document.write("get out......")
//                         break;
//                         default:
//                             document.write("ham nahi sudhrenge");
                            
//     }


// loops------>>>>>>>>>>
// let counter=1;
// while (counter<=10) {
//     document.write("TechGun")
//     counter++;
// }

//Q. 1 to 100 sum of all even no using while loop---->>>>>
// let counter=1;
// let sum=0;
//  while(counter<=100){
//      if(counter%2==0){
//          sum=sum+counter
//      }
// counter++;
//  }
//  document.write(sum);

//Q. 1 to 100 print odd num sum
// let num=1;
// oddNo=0;
// while(num<=100){
//     if(num%2!=0){
// oddNo=oddNo+num
//     }
//     num++;
// }
// document.write(oddNo);

//Q.1 to 100 print even no
// let num=1;
// document.write("even no are ---->>>>>>>>>")
//  while(num<=100){
//      if(num%2==0){
// document.write(num)
//      }
//      num++;
//  }


//do-while loop--->>>>>
// let num=12;
// do{
//     document.write("sabbu")
//     num++;
// } while (num<=10);

//for loop----->>>>>>>>
//1 to 100 sum no 
// sum=0;
// for(let num =1; num<=100;num++){

// sum=sum+num;
// }

// document.write(sum);

//some of even no 1 to 100;
// let sum=0;
// for(let num=1;num<=100;num++){
//     if (num%2==0) {
//         sum=sum+num;
//     }
// }
// document.write(sum);

//print 1 to 20 no
// for(let num=1;num<=20;num++){
//     document.write(num)
//     document.write("<br>")
// }

//use of continue and break-------->>>>>>>>>>

// for(let num=1;num<=12;num++){
//     if(num===6){
//         break;
//     }
//     document.write(num);
//     document.write("<br>")
// }

// for(let num=1;num<=12;num++){
//     if(num===10){
// continue;
//     }
//     document.write(num);
//     document.write("<br>")
// }


//nested loop--------->>>>>>>>

// for(let counter=1;counter<=10;counter++){
// document.write(counter);
// document.write("<br>")
// for(counter2=1;counter2<3;counter2++){
//     document.write("sabbu")
//     document.write("<br>")
// }
// }

//function that will intract with use like asking for out value like scanner in java------>>>>

// let age =prompt("enter your age",20);
// if(age!=null){
//     document.write(`Your age is ${age}`)
// }else{
//     document.write("Select age dear")
// }

// let response=confirm("Are You sure wante to go at home page");
// if(response){
//     document.write("Home")
// }else{
//     document.write("You are on dashboard")
// }

// let type=true;
// console.log(typeof type);
// let newtype=String(type)
// console.log(typeof newtype);

//counting length
// let name="sabbu-jack"
// console.log(name.length)

//use of concat it is use for adding string-->>>>>
// let str1="Sabbu"
// let str2="jack"

// let str3=str1.concat(" ",str2)
// console.log(str3)


//using indexof it show the position of string;
// let str="that is a house which is honted"
// let position=str.indexOf("honted")
// console.log(position);

// let str="this is a javascript tutorial.it is a good tutorial."
// let position=str.indexOf('is',6);
// console.log(position)
// console.log(str.toUpperCase())
// console.log(str.replace('good','bad'))


//array-------->>>>>>>
// let  book=["math","physics","bio","chemistry","comics"]
// book.push("Hindi")
// console.log(book,book[1])

// Q convert text into array-------
// let text="this is a random text";
// let convertArray=text.split(' ');
// console.log(convertArray);

//adding to array---
// let  book=["math","physics","bio","chemistry","comics"]
// let book1=['naam','shyam']
// let book2=["hindi","english"]
// console.log(book.concat(book1,book2));

// let  book=["math","physics","bio","chemistry","comics"]
// for(i=0;i<book.length;i++){
//     console.log(`element ${i} is ${book[i]}\n`)
// }
//using for -each

// book.forEach(myfun);
// function myfun(valu){
//     console.log(valu)
// }

///function-------->>>>>>>>>
// function multiTable(){
//     for(i=1;i<=10;i++){
//         document.write(`2x${i} =${2*i}`)
//         document.write("<br>")
//     }
// }
// multiTable();

// function multiTable(num){
//     for(i=1;i<=10;i++){
//         document.write(`${num}x${i} =${num*i}`)
//         document.write("<br>")
//     }
// }
// multiTable(5);

// function add(n1,n2){
// document.write(n1+n2)
// }
// add(5,6)

// function add(){
//     if(arguments.length==0){
//         console.log("no argumnet given")
//     }else{
//         let sum=0;
//         for(i=0;i<arguments.length;i++){
//             sum=sum+arguments[i];
            
//         }
//         console.log(sum);
//     }
   
// }

// add(1,3);

// function compare(a,b){
//     if(a>b){
//         return a;
//     }else if(b>a){
//         return b;
//     }else{
//         return 'hello';
//     }
// }
// let x =compare(1,2);
// document.write(x);


//local varialble vs globle variable------>>>>>>
//local variable ko function k andr define krte h aur fucntion k andr hi use krte h globle ko bahar define krte h aur kahi v use kr skte h
// let glob="Honda"
// function add(){
//     let loc ="hi"
//     document.write(loc);
//     document.write("<br>")
// }
// add();
// document.write(glob)


//anonymouse function----->>>>>>>wo function jiska naam hi n ho.
// let show=function (){
//     document.write("Hello World")
// }
// show();

// function show(){
//     document.write("Hi Sabbu")
// }
// setTimeout(show,3000);

// setTimeout(function(){
//     document.write("Hello Jack")
// },3000)

//object

// let person={
//     firstName:'Sabbu',
//     lastName:'Jack',
//     age:23,
//     post:'maharajganj'
// };
// console.log(person);
// console.log(person.age)
// console.log(person.post)

// let person={
//     firstName:'Sabbu',
//         lastName:'Jack',
//         age:23,
//         post:'maharajganj'
// }
// for(let skk in person){
//     console.log(skk+" : "+person[skk]);
// }

let person={
    name:'komal',
    age:27,
    village:'kansapur',

    Welcome () {
        console.log("good-nyt")
    }

}
// function greet(){
//     console.log("Hello ......")
// }
// person.tosay=greet();

// person.tosay=function (){
//     console.log('GOOD....')
// }
// person.tosay();

person.Welcome();

//use of this -----it is use for same object property------>>>>>>>.
// let book={
//     type:'fiction',
//     writer:'sabbu',
//     page:300,
//     read(){
//         document.write('this book is written by '+' '+ this.writer +" " +'and he belongs to ' + author.city)
//     }
// }
// let author={
//     age:40,
//     city:'varanasi'
// }
// book.read();

//some math function---
// let x =Math.pow(2,3)
// console.log(x)
// let y=Math.sqrt(100)
// console.log(y)


//Date object------>>>>>>>>>
// let x=new Date();//ye current date print krega
// console.log(x)

//We can create object like this also--
//  var Person = new Object()
//  Person.name="Sabbu";
//  Person.age=24;
//  console.log(Person);

//getter & setter----->>>>>>>

// let employee={
//     name:'Sabbu',
//     age:24,
//     city:"varanasi",

//     get getEmplyee(){
//         return this.name.toUpperCase();
//     }
   
// }
// console.log(employee.getEmplyee)

// let Person={name:"mohan",age:30,
// city:"bhadohi",
// set setName(n){
//  this.name=n.toUpperCase()
// }
// }
// Person.setName="jack"
// console.log(Person)


//Object constructor------>>>>>>
// function Student(name,age,city){
//     this.name=name;
//     this.age=age
//     this.city=city
// }
// var student1=new Student("sabbu",22,'bhadohi')
// student1.lastName='jack'

// console.log(student1)



//prototype----->>>>>>>>.

// function Student(name,city,age){
//     this.name=name
//     this.city=city
//     this.age=age
// }
// let student1=new Student('Sahab','delhi',30)
// let student2=new Student('Sahab1','newdelhi',20)
// Student.prototype.nationality='indian';
// console.log(student1);
// console.log(student2)
// console.log(student1.nationality)



//nested object-->>>>>
// var student={
//     name:'sabbu',
//     age:30,
//     lastName:'jack',
//     address:{
//         vill:'kansapur',
//         city:'varanasi',
//         zipcode:221314
//     }
// }
// console.log(student)
// console.log(student.address)
// console.log(student.address.city)



//hoisting --->>>.this will help to declare variable first it help only declaration of variable not in value asign
// x=5;
// console.log(x)
// var x;
 

//DOM--->>The documnet object model(DOM) is an application programming interface(API)for manupulating
//HTM and XML documents.(add,remove,and modify parts of the documents/HTML)

//select element by id--------


//query selector-->>>>>
// let para=document.querySelectorAll('p.para')
// for(let i=0;i<para.length;i++){
//     para[i].innerHTML='para is changing'
// }


//Dom events----->>>>>>>>>>
//or event listiener v use kr skte h----bahut event h google search krke sare dekh skte h sare yaad rkhna possible ni h
