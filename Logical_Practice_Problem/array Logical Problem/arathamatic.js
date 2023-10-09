function ArathmaticOperation(a,b){
        return new Promise((resolve,reject) => {
  if(typeof a !== 'number' || typeof b !== 'number'){

      reject(new Error(` Both inputs must be numbers`))
  } else {
      setTimeout(() => {

    const sum = a + b;
    resolve(sum);

},2000)

} 
 });
 
};


ArathmaticOperation(6,8)
.then((result) => {
      console.log(`Addition result : ${result}`)
})
.catch((result) => {
    console.error(`Error : ${error}`)
})
