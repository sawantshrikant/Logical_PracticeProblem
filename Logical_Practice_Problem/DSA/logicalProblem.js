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



