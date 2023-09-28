//Find the largest and smallest numbers in an array of integers without using any built-in JavaScript functions or methods.

const numbers = [3,8,7,9,5,6];



function MinMaxNum(arr){
let min = arr[0]
let max = arr[0]

for (let i = 1; i < arr.length; i++) {
    if(arr[i] < min){
        min = arr[i];
    } else if (arr[i] > max) {
        max = arr[i];
    }

}


return {min , max};

}

const result = MinMaxNum(numbers);

console.log(`Min : ${result.min} and Max : ${result.max}`)



  
