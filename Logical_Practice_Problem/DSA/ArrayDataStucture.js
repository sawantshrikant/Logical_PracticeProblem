// // const Array1 = [1,2,3,4,5,6,7,8,9,]

// // for (let i = 0; i < Array1.length;i++){
// //     console.log(Array1[i])
// // }


// // let doublearray = Array1.map(function(element) {
// //     return element * 2
// // })

// // console.log(doublearray)

// // //Reversing an Array:

// // function reversedArray(arr){
// //     let reversed = [];
// //     for (let i  = arr.length-1; i >= 0; i--){
// //         reversed.push(arr[i])
// //     }
// //     return reversed
// // }

// // let ReversedArray = reversedArray(Array1)
// // console.log(ReversedArray)

// // //Finding Duplicate Elements in an Array

// // const Arr2  = [ 1,2,3,4,5,,5,4,7,9,7,10]

// // function FindDuplicate(arr){
// //     let duplicate = [];
    

// //     for (i = 0 ; i < arr.length; i++) {
// //         for(let j = i + 1; j < arr.length;j++){
// //             if(arr[i] == arr[j] && !duplicate.includes(arr[i])) {
// //                 duplicate.push(arr[i])
// //             }
// //         }

// //     }
// //     return duplicate
// // }

// // const Duplicateele = FindDuplicate(Arr2)

// // console.log(Duplicateele);

// //An array is a collection of elements, each identified by an index or a key.
// // It is a linear data structure where elements are stored in  memory locations. 

// //Declaration and Initialization

// //You can declare and initialize an array in JavaScript using square brackets 
// let nameOfCom = ["maruti","tata", "mahindra"]

// //Accessing Elements

// console.log(nameOfCom[0])
// console.log(nameOfCom[1])
// console.log(nameOfCom[2])

// //arraylength
// let boss = nameOfCom.length;
// console.log(boss)


// //Adding Elements:
// //You can add elements to the end of an array using the push method.

// nameOfCom.push("ola","kia")
// console.log(nameOfCom);

// //Removing Elements:
// //You can remove elements from the end of an array using the pop method.

// nameOfCom.pop("kia")
// console.log(nameOfCom);



// for (let i=0; i<nameOfCom.length; i++ ) {
//     console.log(nameOfCom[i])
// }

// for(let nameOfCompany of nameOfCom ){
//     console.log(nameOfCompany)
// }



// let MixedArray = [1,"ramshankar", true, {nameOfStudent : "Samantha" }]

// console.log(MixedArray);


// // change the value of an element at a specific index by assigning a new value to it.

// MixedArray[0] = "BHUVAN"

// console.log(MixedArray);


// //Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise and readable way.

// const movie = ["jwm","knph","kkhh","gadder"]

// let [first,second,third,four] =  movie;

// console.log(second);


// let [first1, ...rest] = movie

// console.log(first);
// console.log(rest);

// //array methods (e.g., map, filter, slice) do not modify the original array; instead, they return a new array 


// //Common Array Methods:
// //JavaScript provides many built-in methods to manipulate arrays, 
// //including push, pop, shift, unshift, splice, concat, slice, indexOf, includes, map, filter, reduce, and many more. 


// //Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// // arr.splice(1,4)
// // console.log(arr);






// //We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument.
// // Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.


// function htmlColorNames(arr) {
// arr.splice(0,2, 'DarkSalmon', 'BalanchedAlmond')
//     return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// //We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// //The function is supposed to return a new array made up of num copies of arr.

// // function copyMachine(arr,num){
// //     let newArr =[]
// //     while(num >=1){
// //         newArr.push([...arr])

// //        num-- 
// //     }
// //     return newArr
// // }

// // console.log(copyMachine([true,false,true],2))


// //We have defined a function spreadOut that returns the variable sentence. 
// //Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].


function spreadOut(){
    let fragment = ['to','code']
    let sentence = ['learning',...fragment,'is','fun' ]

    return sentence;
}
 console.log(spreadOut());


//convert string into array

const stringArr = "my name is shrikant sawant"

const newArrconvert = stringArr.split(" ")

console.log(newArrconvert)

// console.log(newArrconvert[3]);

// const third = newArrconvert.join(" ");
// console.log(third);

// const third = newArrconvert.toString();
// console.log(third);



//now in this new array convert first carector of word into uppercase

// for(let i = 0; i <newArrconvert.length; i++) {
//     newArrconvert[i] = newArrconvert[i][0].toUpperCase() + newArrconvert[i].slice(1)
// }

// console.log(newArrconvert);


for(let i = 0; i <newArrconvert.length; i++) {
    newArrconvert[i] = newArrconvert[i][newArrconvert[i].length-1].toUpperCase() + newArrconvert[i].slice()
}

console.log(newArrconvert);


let  arr1 = [1,2,4,5,6];
let arr2 = [5,6,9,3,4];
let arr3 = [10,85,45,24]


const a = arr1.concat(arr2,arr3);

console.log(a);

//function access n number of array how i get one single array






// // Convert Fahrenheit to Celsius

// function toCelsius(Fahrenheit){
//     return (5/9) * (Fahrenheit-32)

// }

// let value = toCelsius(77);
// console.log(value)

// // merge 2  array use concat
// const myGirls = ["aaaa", "bbbb"];
// const myBoys = ["cccc", "dddd", "eeeee"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// const mySchool = ["ffff","gggg","hhhh","iiii"]


// const newMerge = myGirls.concat(myBoys,mySchool);

// console.log(newMerge);


// const points = [40, 100, 1, 5, 25, 10];


// console.log(points.sort());
// let alpha = (points.sort(function(a, b){return a - b}));

// console.log(alpha);

// console.log(`smallest number in array ${alpha[0]}`)
// console.log(`largest number in array ${alpha.length-1}`)


// let bestArr = [45,4,9,16,25]

//  bestArr.forEach(function(element) {
//     let squarevalue = element * element;
    
//     console.log(`squared value is ${squarevalue}`)

// })
// ;


// squaredValue = bestArr.map(function(element){
//     return element * element
// })

// console.log(squaredValue);


// let senstance = ["Hello ram" , "I am working on js", "I  love pizza"]

// let words = senstance.flatMap(function(senstance){
//     return senstance.split(' ')
// });

// console.log(words)


// //filter

// let players = [42,10,85,2,9,78]

// let evenNumber = players.filter(function(element){
//     return element % 2 === 0;
// })

// console.log(evenNumber);


// let PrimeNum = [5,8,7,15,63,75]




// // function isPrime(num){
// //     if (num <=1 ) return false;

// // for(let i =2; i<= num /2; i++){
// //     if(num % i === 0) {
// //         return false;
// //     }
// // }
// //   return true;
// // }

// // let primenumber = [];

// // for (let i = 0; i <PrimeNum.length;i++) {
// //     if(isPrime(PrimeNum[i])){
// //         primenumber.push(PrimeNum[i])
// //     }
// // }

// // console.log(primenumber)


// //reduce

// const redsum = [ 4,6,3,9,85,4,2]

// let sumOfNumbers = redsum.reduce(function(accumulator,current){
//     return accumulator + current
// },0)

// console.log(sumOfNumbers);


// //remove duplicate from array

// const dupliarray = [1,2,3,4,5,6,2,3,4,5]
// function removeduplicate(arr){
//       return arr.filter((element, index) => arr.indexOf(element) === index);
// }

// let uniqueelement = removeduplicate(dupliarray);

// console.log(uniqueelement);

// (function(name) {
//     console.log("Hello " +name+ " how are you ?")
// })("ravi");


//practice logical 

// const employee = [
//     {
//         Id : 1,
//         name : "Ravishkumar",
//         lastName: "sharma",
//         salary : 5000
//     },
//     {
//         Id : 2,
//         name : "bhuvan",
//         lastName: "thakur",
//         salary : 7000
//     }
// ]

// employee.forEach((Employee) => {
//     console.log(Employee.Id)
//     console.log(Employee.salary)

// })


const stringarr = "my name is shrikant sawant"

const newArray = stringarr.split(" ")


for (let i = 0; i < newArray.length; i++){

const word = newArray[i];

newArray[i] = word.slice(0,-1) + word[word.length - 1].toUpperCase();
}

console.log(newArray);


//function access n number of array how i get one single array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinedArray = [...array1, ...array2, ...array3];

console.log(combinedArray);


//

function mergeArray(...array){
    const combineArray2 = [].concat(...array)

    const uniqueArray = [...new Set(combineArray2)]

    return  uniqueArray
}


const arr11 = [1,2,3,4,55,4]
const arr12 = [23,56,8,9,6]
const arr13 = [12,36,85,74,6]


const combinedArray1 = mergeArray(arr11,arr12,arr13)

console.log(combinedArray1);
