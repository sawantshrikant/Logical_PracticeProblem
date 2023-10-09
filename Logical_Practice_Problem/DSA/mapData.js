// //The map data structure, also known as a dictionary, is used to store a collection of key-value pairs. 
// //It is an essential data structure in computer science because it allows for efficient and fast lookups, inserts, and deletes.

// //Creating a Map
// const myMap = new Map();

// //Adding Key-Value Pairs
// //add key-value pairs to a Map using the set(key, value) method

// myMap.set("name", "John");
// myMap.set("age", 30);

// //Getting Values by Key
// // retrieve values from a Map using the get(key) method:

// const name1 = myMap.get("name");
// console.log(name1); 


// //checking for Key Existence
// //check if a key exists in a Map using the has(key) method

// if (myMap.has("name")) {
//     console.log("The 'name' key exists in the map.");
//   } else {
//     console.log("The 'name' key does not exist in the map.");
//   }

// //Deleting Key-Value Pairs
// // remove a key-value pair from a Map using the delete(key) method

// myMap.delete("age");

// // iterate over all key-value pairs in a Map using the forEach() method

// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
//   });

// //Size of the Map
// // get the number of key-value pairs in a Map using the size property

// const size = myMap.size;
// console.log(`The size of the map is ${size}`);

// //Clearing the Map:
// //You can remove all key-value pairs from a Map using the clear() method

// myMap.clear();


//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
//A Map has a property that represents the size of the map.

// create a Map by passing an Array to the new Map() constructor

const studentClass = new Map([
  ["raviName" , 3],
  ["sachinName" , 5],
  ["ramName" , 6]
])

console.log(studentClass.get("sachinName"));


//The size property returns the number of elements in a Map

console.log(studentClass.size);

//The delete() method removes a Map element
console.log(studentClass.delete("ramName"))

console.log(studentClass)


//The clear() method removes all the elements from a Map

// const Myfriend = new Map([
//   ["fromSchool", 40],
//   ["fromCollege", 10],
//   ["fromArcchitecture", 5]
  
// ])


// console.log(Myfriend.clear());

// console.log(Myfriend);

//The has() method returns true if a key exists in a Map

console.log(studentClass.has("raviName"));

console.log(studentClass.has("sagarName"));


//Maps are Objects
//typeof returns object

console.log(typeof studentClass);

console.log(studentClass instanceof Map);




