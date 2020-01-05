
calculateAge(1991);

function calculateAge(year){
    console.log(2019-year);  //28 as output
}
//Here we have called the funcion first and then declared it. Reaon why this will run is, 
//global execution context becomes aware at  line 2 that there will be a function named 'calculateAge'.
//What we did above is function declaration. This is called Funcion Hoisting.


//Below is function expression
// retirement(1956);
// var retirement = function(birthYear){
//     console.log(60 - (2019-birthYear));
// }
//This does not work because 'Hoisting' works only with function declaration and not with function expression

//variable Hoisting stage
console.log(age); //this will give value as 'undefined' because as code is scanned, it is identified that there is variable named 'age' whos value is 'undefined' initially because compiler dont lnow value of age yet until it reaches to line 21st
var age= 23;

//global execution context
function foo(){
    console.log(age); // this will give 'undefined'. Because now, the new execution context of funtion foo is started and till this line no 'age' variable is assigned with any value 
    var age = 65;
    console.log(age);  // this will print 65 as its a new execution context of this funciton
}
foo();
console.log(age); // this will give 23 as its now executing the global execution context



// //scoping and scope chaining
// var a='Hi'; //this is in global execution context
// first();

// function first(){
//     var b= 'John';
//     second();

//         function second(){
//             var c='Good Morning';
//             third();

//             function third(){
//                 var d='How are you doing';
//                 console.log( a + b + c +d);  //Hi John Good Morning How are you doing.
//             }
//         }
// }

//scoping and scope chaining
// var a='Hi'; //this is in global execution context
// first();

// function first(){
//     var b= 'John';
//     second();
    
//     function second(){
//         var c='Good Morning';
//         third();            
//     }
// }

// function third(){
//         var d='How are you doing';
//         console.log( a + b + c +d);  //will throw error as b is not defined . c is also ot defined but as execution  breaks at point where b is attempled to access. 
//     }


//this keyword
console.log(this); //this is bydefault Window object

var james={
    name: 'James',
    yearOfBirth : 1990,
    calculateAge : function(){
        console.log(2019 - this.yearOfBirth); // here this wil hold now object 'james'. Because this keyword referes to that object which called the method and at line 85, object of james called the method calculateAge()
        console.log(this);
    }
}
james.calculateAge();



 