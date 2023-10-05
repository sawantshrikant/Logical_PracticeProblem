// const Array1 = [1,2,3,4,5,6,7,8,9,]

// for (let i = 0; i < Array1.length;i++){
//     console.log(Array1[i])
// }


// let doublearray = Array1.map(function(element) {
//     return element * 2
// })

// console.log(doublearray)

// //Reversing an Array:

// function reversedArray(arr){
//     let reversed = [];
//     for (let i  = arr.length-1; i >= 0; i--){
//         reversed.push(arr[i])
//     }
//     return reversed
// }

// let ReversedArray = reversedArray(Array1)
// console.log(ReversedArray)

// //Finding Duplicate Elements in an Array

// const Arr2  = [ 1,2,3,4,5,,5,4,7,9,7,10]

// function FindDuplicate(arr){
//     let duplicate = [];
    

//     for (i = 0 ; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length;j++){
//             if(arr[i] == arr[j] && !duplicate.includes(arr[i])) {
//                 duplicate.push(arr[i])
//             }
//         }

//     }
//     return duplicate
// }

// const Duplicateele = FindDuplicate(Arr2)

// console.log(Duplicateele);

//An array is a collection of elements, each identified by an index or a key.
// It is a linear data structure where elements are stored in  memory locations. 

//Declaration and Initialization

//You can declare and initialize an array in JavaScript using square brackets 
let nameOfCom = ["maruti","tata", "mahindra"]

//Accessing Elements

console.log(nameOfCom[0])
console.log(nameOfCom[1])
console.log(nameOfCom[2])

//arraylength
let boss = nameOfCom.length;
console.log(boss)


//Adding Elements:
//You can add elements to the end of an array using the push method.

nameOfCom.push("ola","kia")
console.log(nameOfCom);

//Removing Elements:
//You can remove elements from the end of an array using the pop method.

nameOfCom.pop("kia")
console.log(nameOfCom);

//Iterating Over an Array:
//You can use loops like for or for...of to iterate through the elements of an array.

for (let i=0; i<nameOfCom.length; i++ ) {
    console.log(nameOfCom[i])
}

for(let nameOfCompany of nameOfCom ){
    console.log(nameOfCompany)
}

//Arrays are Heterogeneous:
//In JavaScript, arrays can contain elements of different data types.

let MixedArray = [1,"ramshankar", true, {nameOfStudent : "Samantha" }]

console.log(MixedArray);


// change the value of an element at a specific index by assigning a new value to it.

MixedArray[0] = "BHUVAN"

console.log(MixedArray);


//Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise and readable way.

const movie = ["jwm","knph","kkhh","gadder"]

let [first,second,third,four] =  movie;

console.log(second);


let [first1, ...rest] = movie

console.log(first);
console.log(rest);

//array methods (e.g., map, filter, slice) do not modify the original array; instead, they return a new array 


//Common Array Methods:
//JavaScript provides many built-in methods to manipulate arrays, 
//including push, pop, shift, unshift, splice, concat, slice, indexOf, includes, map, filter, reduce, and many more. 