//compute the sum of even Numbers given in Array 


const Arr1 = [8,6,4,5,6,3,5,9]

function SumofEvenNumber(arr) {
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] % 2 == 0) {
            sum += arr[i]
        }
    }
    return sum
}

const result = SumofEvenNumber(Arr1);

console.log(`The sum of even number ${result}`)


//write a program for factorial of 4
let num = 5;

var fact = 1;

for(let i=num;i>0;i--){
     fact = fact * i
}

console.log(fact);


// write a program for "cake" is anagram of "akec" or not 


const word1 = "CAKE"
const word2 = "EKAC"


function checkStringAnagram(a,b){
    let len1 = a.length;
    let len2 = b.length;{
        if(len1 != len2){
            console.log("Invalid input")
            return;
        }

        let word = word1.split("")
        let splitedword2 = word2.split("")

         




           for(let i = 0; i < word.length; i++) {
            for(let j = 0; j < splitedword2.length;i++){
                if(splitedword2[j] == word[i]){

                    return true;
                    
                    
               }
            

        }
        return false;
    }
}
}

const result1 = checkStringAnagram(word1,word2);

console.log(result1);


//write a program to print hello name where nemae is user input


const firstName = parseInt(prompt('Enter a firstName: '));

console.log(`welcome  ${firstName}`)

// program to find the factorial of a number


// const number11 = parseInt(prompt('Enter a positive Num: '))

// if (number < 0) {
//     console.log('Factorial for negative number does not exist.');
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number11} is ${fact}.`);
// }


//We have defined a function, popShift, which takes an array as an argument and returns a new array.
 //Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

 function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift() 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


  //splice

let arrayDay = ['today', 'was', 'not', 'so', 'great'];

arrayDay.splice(2, 2);

console.log(arrayDay);

let felling = ['I', 'am', 'feeling', 'really', 'happy'];

let newArrayFeeling = felling.splice(3, 2);

console.log(newArrayFeeling);


//Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice

console.log(arr);


