// 1 ) : to check prime number
//const number = parseInt(prompt("Enter Positive Number To check prime Number: "))  //take input from user
number = 5
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number")
}

else if (number > 1){
    for(let i=2; i < number ; i++){
        if(number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
       } else {
        console.log(`${number} is not a Prime Number`)
       }
}
else {
    console.log("The number is not a prime number")   //// check if number is less than 1
};

//sum of two number

const num1 = 5;
const num2 = 8;

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is : ${sum}`);

// find square root

const number1 = 5;

const result = Math.sqrt(number1);
console.log(`The square root of ${number1} is : ${result}`);

// find area of triangle

const BaseValue = 5.2;
const HeightOfTriangle = 7;

const AreaOfTriangle = (BaseValue * HeightOfTriangle) / 2

console.log(`The Area of Triangle is : ${AreaOfTriangle}`)

//with 3 side

const side1 = 5;
const side2 = 10;
const side3 = 12.5;

const s = (side1 + side2 + side3) / 2;  //// calculate the semi-perimeter

const area = Math.sqrt(s*(s-side1) * (s-side2) * (s-side3));
console.log(`The area of triangle : ${area}`)