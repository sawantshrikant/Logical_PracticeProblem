let a = 5;
let b = 7;

function addition(){
    return new Promise((resolved, reject) => {
        const result = a + b;
       
        if (result % 2 == 0) {
            resolved(`is even : ${result}`)
        } else {
            reject(`Something Wrong : ${result}`)
        }
    })
}


addition()
.then((res) => {
    console.log(`${res}`)
})
.catch((error) => {
     console.log(`${error}`)
})
