// const products = {
//     name: "Mobile",
//     description: "Apple",
//     vendors: [{
//         nameV: "Raj Enterprises",
//         is_main: false ,
//         variety:[
//             {
//                 ram: "8Gb",
                
//             },
//             {
//                 rom: "128Gb"
//             }]
//     },
//     {
//         nameV: "Rahul Enterprises",
//         is_main:true,
//         variety:[
//             {
//                 ram: "4Gb",
                
//             },
//             {
//                 rom: "64Gb"
//             }]
//     }]
// }

// // const vendor = products.vendors.filter((vendor) => vendor.nameV === "Raj Enterprises");

// // vendor.map((val) => console.log(val));


// const vendor1 = products.vendors.filter((vendor2) => vendor2.nameV === "Raj Enterprises")
// vendor1.map((val) => console.log(val));

// console.log(vendor1);




function MultipleTwoNumber(a,b) {
      return new Promise((resolve,reject) => {
        let c = 0;

        if(a  > 0 && b > 0 ) {
            c = a * b
           
            
            
            resolve(`sucess  : ${c}` )
        }else{
            reject("something wrong")
    }
    })
}

MultipleTwoNumber(5,5)
.then ((result) => {
    console.log(`Multiple of two number : ${result}`)
})
.catch((error) => {
    console.error(`Error : ${error}`)
})


// function MultipleTwoNumber(a,b) {
//       return new Promise((resolve,reject) => {
//         let c = 0;

//         if(a  > 0 && b > 0 ) {
//             c = a * b
           
            
            
//             resolve(`sucess  : ${c}` )
//         }else{
//             reject("something wrong")
//     }
//     })
// }

// MultipleTwoNumber(5,5)
// .then ((result) => {
//     console.log(`Multiple of two number : ${result}`)
// })
// .catch((error) => {
//     console.error(`Error : ${error}`)
// })


function MultipleTwoNumber(a,b) {
    return new Promise((resolve,reject) => {
      let result = a * b;

      if(result) {
          
        resolve(result);
         
          
          
         
      }else{
          reject("something wrong")
  }
  })
}

MultipleTwoNumber(5,5)
.then ((result) => {
  console.log(`Multiple of two number : ${result}`)
})
.catch((error) => {
  console.error(`Error : ${error}`)
})



//An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined.

//functions can be returned from other functions, or even be passed as arguments into another function 

const myFunction = function greeting() {
    return "Hello";
   };

   console.log(myFunction())











