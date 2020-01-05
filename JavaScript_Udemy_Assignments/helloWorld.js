//simple log on console
console.log('Hello World..Again!');

//Data types. 'null' and 'undefined' are also types. Look for it
var name = 'Omkar';
var age = 28;
var isMarried=true;
console.log(name + ' ' + age + 'Is he Married ? '+isMarried);   //here the conversion of age is made to string in order to dispaly it on ConsoeUI which accept only strings. 
//This will print 'Omkar 28. Is he Married ? true'.This type converiosn is called Type Coercion
// var promtValue =  prompt('Whats your name?');
// console.log(promtValue);

//Arethmatic calculations
var markWeight=50;
var markHeight=1.6;
var JohnWeight=80;
var JohnHeight=1.3;
var ageOfRetirement=58;
var boolValue = ( markWeight / (markHeight * markHeight) ) > (JohnWeight / (JohnHeight * JohnHeight));
console.log(boolValue);
console.log("Your Age: " +calculateAge(1991) + " years");
console.log("Retirement Details :" + yearUntilRetirement(1991));


//functions and calling functions inside functions
function calculateAge(birthYear){
    return 2019-birthYear;
}
function yearUntilRetirement(birthYear){
   console.log("Service remaining" + (ageOfRetirement - calculateAge(birthYear) + "years from now"));   
   console.log("You will retire on " + (2019 + (ageOfRetirement - calculateAge(birthYear))) + "years from now");
}

//function with Switch case
var job = function whatYouDo(name,job){
    switch(job)
    {
        case 'teacher' : return name + ' teaches in school';
        case 'engineer' : return name + ' is an engineer in auto industry';
        case 'developer' : return name + ' is a developer in MNC';
        default: return name + ' does something else';
    }
}
console.log(job('James','teacher'));
console.log(job('Rony','developer'));
console.log(job('Rini','engineer'));
console.log(job('Nick','Minister'));

//Array
var names=['James','Tames','Hames'];
console.log(names[1]);
names[5]='Kames';
console.log(names); //here names[3] and names[4] are 'undefined'
//Arrya of mixed types
var mixedDataTypeArray=['Ruther','Ford',1950,true];
mixedDataTypeArray.push('USA'); //pushes at end of array
mixedDataTypeArray.pop(); //pops out last item
mixedDataTypeArray.unshift('Mr.'); //adds an elemet at begining of array
mixedDataTypeArray.shift();// removes first item from array
mixedDataTypeArray.indexOf('USA'); //returns the zero based index of element else returns -1
//Coding challenge
var billArray = [100,180,230];
var tipArray =[];
var finalBill=[];
var x=calculateTip(billArray);
function calculateTip(billArray)
{
    for(var item of billArray){
        var tip= item >= 200 ? item*0.2 :item < 200 && item >= 100 ? item*0.1 : item*0.05;
        tipArray.push(tip);
        finalBill.push(item+tip);
    }
    console.log(billArray);
    console.log(tipArray);
    console.log(finalBill);
}

//Objects & Properties
var employee = {
    firstName : 'Jessy',
    lastName : 'Lang',
    salary : 110101,
    isMarried : false,
    birthYear : 1990,
    calculateAge : function(){
      //  return 2019- this.birthYear;
      this.age = 2019- this.birthYear;
    }
};
console.log(employee);
console.log(employee.firstName);
employee.firstName = 'Jessy1'
console.log(employee.firstName);
console.log(employee.calculateAge());

var employee1 =  new Object();
employee1.firstName = 'Jessy11';
employee1.lastName = 'Lang';
employee1.salary = 110101;
employee1.isMarried = false;
employee1.birthYear = 1990;
console.log(employee1);

//coding challenge no 4
//**********************Remains Unsolved by this below approach ********************************/

// var Athlet1=new Object();
// Athlet1.name = "Athlet1";
// Athlet1.age = 21;
// Athlet1.heightInMeters = 2;
// Athlet1.weightInKGs = 60;
// Athlet1.calculateBMI = function(){
//     Athlet1.weightInKGs/Athlet1.heightInMeters* Athlet1.heightInMeters;
// };
// console.log(Athlet1.calculateBMI);

// var Athlet2=new Object();
// Athlet1.name = "Athlet2";
// Athlet1.age = 27;
// Athlet1.heightInMeters = 3;
// Athlet1.weightInKGs = 60;
// Athlet1.calculateBMI = function(){
//  Athlet2.weightInKGs/Athlet2.heightInMeters* Athlet2.heightInMeters;
// };
// console.log(Athlet2.calculateBMI);

//////////////////Loops and Iterations /////////////////////////
for(var i= 0;i < 10 ; i++ )
{
    console.log(i);
}
var person = ['Mohan',true,'Jagan',1212];
for(var i= 0;i < person.length ; i++ )
{
    console.log(person[i]);
}

//Check out ES6 compatibility table TO KNOW which browser support which Java Script language


