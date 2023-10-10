const number = 5;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci series :')


for (let i = 1; i <= number; i++) {
    console.log(n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;


}

// find the factorial Number

const number1 = 5;

if (number1 < 0) {
    console.log(`Error! Factorial for negative number not possible`)

}
else if (number1 === 0) {
    console.log(`The Factorial of ${number1} is  1.`)

}

else {
    let fact  = 1 ;
    for (i=1; i <= number1; i++){
        fact *=  i;

    }
    console.log(`The factorial of ${number1} is ${fact}.`);
    
}

//program to convert first letter of a string to uppercase

const string = ("javascript")

function CapatilizeFirstLet(str) {

    const capatilize = str.charAt(0).toUpperCase() + str.slice(1);
    return capatilize
}

const result = CapatilizeFirstLet(string);

console.log(result);


