// // //Let Hoisting


// // carname = "Volve"
// // var carname;

// // console.log(carname)




// // carName2 = "kia"
// // var carName2;


// // console.log(carName2)


// //  carname1 = "mahendra"
// //  let carname1 = "Volve"

// // console.log(carname1)

// // //let and const are not hoisted


// // //object

// // const car = {type : suv , color : green , model : 500}




// const person = {
//     firstName: "prathamesh",
//     lastName: "sharma",
//     age: 28,
//     eyeColor: "blue"
//   };


//   console.log(person.eyeColor)
//   console.log(person["lastName"])



//   const personDetails = {
//     firstName: "prathamesh",
//     lastName: "sharma",
//     age: 28,
//     eyeColor: "blue",
//     fullName : function(){
//         return this.firstName+ " " +this.lastName
//     }
//   };

//   console.log(personDetails.fullName());



//   //closures

//   function Parent(){
//     let a = 10;

//     function child(){
//         console.log(a)
//     }

//     return child
//   }

//   const closuresFunction = Parent();

//   closuresFunction();

 

//   function addition(a){
//        function add(b){
//         return a + b
//        }
//        return add
//   }

//   const additionTwo = addition(5);
//   console.log(additionTwo(6));


  //calculator using closures

//   function calc(operation){
//     return function (x,y){
//         if(operation === 'add'){
//             return x + y
//         } else if (operation === 'subtract'){
//             return x - y
//         }else if (operation === 'Multiple'){
//             return x * y
//         }else if ( operation === 'divide'){
//             if(y !== 0){
//                 return x /y 
//             }else {
//                 console.log("cannot divide by o")
//             }
//         } else {
//             console.log("Invalid operation")
//         }
//     }
//   }


//      const addOp = calc("add");
//      const subop = calc("subtract");
//      const mulOp = calc("Multiple");
//      const divOp = calc("divide");


//      console.log(addOp(5,3));
//      console.log(subop(10,7));
//      console.log(mulOp(5,5));
//      console.log(divOp(10,2));



//      //Difference between Regular functions and Arrow functions

//      //Arrow functions – a new feature introduced in ES6
   
      

//      // normal function 
//      let square = function TwoNum(a,b){
//               return a* b
//      }

//      console.log(square(5,5));

//      let x = (a,b) => {
//         return a * b 
//      }
    
//      console.log(x(5,6));


//      //Use of this keyword: Unlike regular functions, arrow functions do not have their own this. 

//      let user = {
//         name : "GFG",
//         gfg1 : () => {
//             console.log("Hello " + this.name);
//         },
//         gfg2(){
//             console.log("Welcome to " + this.name)
//         }

//      };

//      user.gfg1();
//      user.gfg2();

//     //Availability of arguments objects: Arguments objects are not available in arrow functions, but are available in regular functions. 

//     let student = {

//         show(){
//             console.log(arguments)
//         }
//     };

//     student.show(1,2,3);



//     let student2 = {    
//         show_ar : () => {
//         console.log(...arguments);
//     }
// };
// student2.show_ar(1, 2, 3);

//Using new keyword: Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. 
//Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible.


// let b = function(){
//     console.log(arguments)
// };

// var y = new b (1,2,3)


// let c = () => {
//     console.log(arguments)
// };

// let d = new c(1,2,3)



//Classes are a template for creating objects. 
//They encapsulate data with code to work on that data. 


//Defining classes
// a class can be defined in two ways: a class expression or a class declaration.

//declaration

// class Rectangle {
//     constructor(height,width) {
//         this.height = height;
//         this.width = width;
//     }
    
//     AreaRec(){
//         return this.height * this.width
        
//     }
    
// }

// let cal = new Rectangle(5,9)
// console.log(cal.AreaRec());


// Expression; the class is anonymous but assigned to a variable
// const Rectangle1 = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }

//     AreaRec1(){
//         return this.height * this.width
//   };
// }

// //Rectangle1(6,9)
//  const AreaofRec = new  Rectangle1(5,6);

//  const Area = AreaofRec.AreaRec1();

//  console.log(Area)



//  const Rectangle1 = class recDetail {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }

//     AreaRec1(){
//         return this.height * this.width
//   };
// }


//  const AreaofRec = new  Rectangle1(5,6);

//  const Area = AreaofRec.AreaRec1();

//  console.log(Area)



 //define getter and setter methods in a class to control access to the properties of instances of that class. Getters allow you to retrieve the value of a property, and setters allow you to modify the value of a property while performing additional logic or validation.

//   class Rectangle {
//     constructor(height,width){
//     this._height = height;
//     this._width = width;
    
//     }

//     get height(){
//         return this._height
//     }

//     set height(newHeight){
//         if(newHeight >= 0 ) {
//             this._height = newHeight
//         } else {
//             console.log("Height must be non negative number")
//         }
//     }

//     get width(){
//         return this._width
//     }

//     set width(newWidth){
//         if(newWidth >= 0){
//             this._width = newWidth
//         }else {
//             console.log("Width must be non negative number")
//         }
//     }

//     calculateArea(){
//         return this._height * this._width
//     }
//   }

//   const MyRec = new Rectangle(9,6)

//   console.log(`Height : ${MyRec.height}`)
//   console.log(`Width : ${MyRec.width}`)

//   MyRec.height = 9;
//   MyRec.width = 12;


//   console.log(`new height : ${MyRec.height}`);
//   console.log(`new width : ${MyRec.width}`);


//   const Area = MyRec.calculateArea();
//   console.log(`area of rec : ${Area}`)



//   //Use bracket notation to find the second-to-last character in the lastName string.

//   const lastName = "Lovelance"

//   const secondToLast = lastName[lastName.length - 2]

//   console.log(secondToLast)


//   //string concatenation operator

//   const myNoun = "dog";
//   const myAdjective = "big";
//   const myVerb = "ran";
//   const myAdverb = "quickly";

//   const senstence = "dog " + "big " + "ran " + "quickly "
//   const wordBla = "The " + myNoun + " and we " + myAdjective + " any " + myVerb + " run run " + myAdverb +" ok" + ".";

//   console.log(senstence);
//   console.log(wordBla)


//   //Using bracket notation select an element from myArray such that myData is equal to 8.

//   const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];

//   const myData = myArray[2][1];
  
//  //pop
//  const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);


//Add ["Paul", 35] to the beginning of the myArray variable 

let myArray1 = ["shrikant",2,6,8]
myArray1.shift();
 myArray1.unshift("Ravi");

console.log(myArray1);



const myArray = [["John", 23], ["dog", 3]];
//myArray.shift();


myArray.unshift(["Paul", 35]);
//   //string method
 

//   //length property
//   let alpha = "abcdefghijklmn"

//   let length = alpha.length;

//   console.log(length);


//   //JavaScript String slice()






// // const Employee = [
// //     {
// //          employeeName : "Akashay",
// //          employeeLastName : "kumar",
// //          employeeId : 1,
// //          employeeSalary : 5000
// //     }
// // ]

