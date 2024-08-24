const num=23;
console.log(num);
function login(){
    console.log("logined")
};
login();
const Count=(count)=>{
for(let i=0; i<count; i++){
    console.log("clicked")
}
}
const arryofcity=["isl","lahore"];
document.getElementById("texts").innerHTML= "<h3>This is a heading</h3>";
//callback function
const calculate=(a,b,operation)=>{
    return operation(a,b)
};
const sum =(a,b)=>a+b;
const sumresult=calculate(12,3,sum);
console.log(sumresult)
document.write(sumresult)
const multiply=(a,b)=>a*b; // Aero function syntax is () = > for single and for multiples ()
const multiplyresult=calculate(12,3,multiply);
console.log(multiplyresult)
//Arrays
const anarray=["city","lahore","karachi","isl"]
//objects
const aLLitems=[{
    
     name:"Abdurrahmanbaig",
    city:"karachi",
    rollnumber:"Bc200200756",
    marks:85,
    score:70,
},{
name:"Hamza baig",
city:"Lahore",
rollnumber:"Bc201202757",
marks:80,
score:40,
},{
    name:"Atif baig",
city:"kohat",
rollnumber:"Bc203204750",
marks:100,
score:85,

},{
    name:"Ali baig",
city:"islamabad",
rollnumber:"Bc207209750",
marks:60,
score:29,
}
]
const filterby =aLLitems.filter((items)=> {return items.score > 50});
console.log(filterby);
const findby =aLLitems.findIndex((items)=>{return items.score>=80});
console.log(findby)
const mapclass = aLLitems.map((items)=>{return[items.name,items.rollnumber]});
console.log(mapclass)
const array1=["adam","john","herry"]
const array2=["jenry","josh","harry"]
const concatenate=array1.concat(array2);
console.log(concatenate)
const remove =concatenate.pop();
console.log(concatenate)
const adds =array1.unshift("kim")
console.log(array1)
// 1. Sorting Arrays
// The sort() method sorts the elements of an array in place and returns the sorted array.
// By default, sort() converts elements to strings and sorts them lexicographically.

const arrayoffruits = ["pineapple", "apple", "mango", "orange"];
arrayoffruits.sort();
console.log(arrayoffruits); // Output: ["apple", "mango", "orange", "pineapple"]

// Sorting an array of numbers using a compare function to ensure numerical sorting.
const arryofnum = [4, 34, 42, 8, 10];
const sortedarray = arryofnum.sort((a, b) => a - b); // a - b for ascending order
console.log(sortedarray); // Output: [4, 8, 10, 34, 42]

// Sorting in descending order
const descendingSortedArray = arryofnum.sort((a, b) => b - a);
console.log(descendingSortedArray); // Output: [42, 34, 10, 8, 4]

// 2. Updating Arrays
// Updating an element in an array is done by directly assigning a new value to the desired index.

const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

// If you try to update an index that doesn’t exist, it will extend the array.
fruits[3] = "date";
console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]

// 3. Delete Method
// The delete operator removes an element from an array but leaves an undefined hole in the array.

const veggies = ["carrot", "broccoli", "spinach"];
delete veggies[1]; // Deletes "broccoli"
console.log(veggies); // Output: ["carrot", undefined, "spinach"]

// The array length remains unchanged.
console.log(veggies.length); // Output: 3

// To remove an element and shift other elements, use splice instead of delete.

// 4. Splice Method
// splice() is used to add/remove/replace elements in an array.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

const arrayoffruits2 = ["pineapple", "apple", "mango", "orange", "new", "old"];

// Removing 2 elements from the start and adding a new element.
arrayoffruits2.splice(0, 2, "newfruit");
console.log(arrayoffruits2); // Output: ["newfruit", "mango", "orange", "new", "old"]

// Removing 1 element from index 3
arrayoffruits2.splice(3, 1);
console.log(arrayoffruits2); // Output: ["newfruit", "mango", "orange", "old"]

// Adding elements without removing any
arrayoffruits2.splice(2, 0, "banana", "grape");
console.log(arrayoffruits2); // Output: ["newfruit", "mango", "banana", "grape", "orange", "old"]

// 5. Slice Method
// slice() returns a shallow copy of a portion of an array into a new array.
// Syntax: array.slice(startIndex, endIndex)

const newarray = arrayoffruits2.slice(2, 5);
console.log(newarray); // Output: ["banana", "grape", "orange"]

// If endIndex is omitted, slice extracts to the end of the array.
const newarray2 = arrayoffruits2.slice(2);
console.log(newarray2); // Output: ["banana", "grape", "orange", "old"]

// Slice does not modify the original array.
console.log(arrayoffruits2); // Output: ["newfruit", "mango", "banana", "grape", "orange", "old"]

// 6. Array Destructuring
// Destructuring allows unpacking elements from arrays or objects into variables.

const arrayoffruits3 = ["pineapple", "apple", "mango", "orange", "new", "old"];

// Destructure the first and third elements, and gather the rest in an array
const [firstfruit, , thirdfruit, ...othervalues] = arrayoffruits3;
console.log(firstfruit); // Output: "pineapple"
console.log(thirdfruit); // Output: "mango"
console.log(othervalues); // Output: ["orange", "new", "old"]

// Destructuring can also provide default values.
const [fruit1, fruit2 = "banana", fruit3] = ["apple"];
console.log(fruit2); // Output: "banana"

// 7. Object Destructuring
// Object destructuring allows unpacking properties from objects into variables.

const vehicle = {
    brand: 'kia',
    model: 'sportage',
    type: 'suv',
    year: 2023,
    nestedtypes: {
        city: "isl",
        country: "pak"
    },
    color: 'silver'
};

// Destructure with default values and nested objects.
const getvehicledetail = ({ brand, model, type, nestedtypes: { city }, no = 132424 }) => {
    console.log(`Name of car: ${brand}, Type: ${type}, No: ${no}, City: ${city}`);
};

getvehicledetail(vehicle); // Output: "Name of car: kia, Type: suv, No: 132424, City: isl"

// Destructuring with renaming
const { brand: carBrand, model: carModel } = vehicle;
console.log(carBrand); // Output: "kia"
console.log(carModel); // Output: "sportage"

// 8. Swapping Variables Using Destructuring
// Destructuring provides a concise way to swap values between two variables.

let a = 10;
let b = 15;
[b, a] = [a, b];
console.log(a); // Output: 15
console.log(b); // Output: 10

// You can use this method to swap any number of variables.
let x = 1, y = 2, z = 3;
[x, y, z] = [z, x, y];
console.log(x); // Output: 3
console.log(y); // Output: 1
console.log(z); // Output: 2

//Task 1:-
const arrayofcars=["Toyota","Honda","Ford","BMW","Audi"];
const sortedarray2 = arrayofcars.sort();
arrayofcars.splice(1,2,"NewBrand1","NewBrand2");
console.log(arrayofcars);
//Task 2:-
const arrayofnumbers=[5,10,15,20,25,30];
const arrayofnewNumbers=[35,40];
const newarray3 = arrayofnumbers.slice(2,6);
console.log(newarray3);
const concatenated = newarray3.concat(arrayofnewNumbers);
const sortedarray3 =concatenated.sort((a,b)=> b-a);
console.log(sortedarray3);

//Task 3:-
function logBookDetails(book) {
    const { title, author, publisher: { location = "Unknown" } } = book;
    console.log(`The book ${title} by ${author} is published at ${location}.`);
  }
  
  const book = {
    title: "JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    publisher: {
      name: "NationalPress",
      // location is missing
    },
  };
  
  logBookDetails(book);
  
  //task 4:-
  const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", inStock: true },
    { id: 2, name: "T-shirt", price: 19.99, category: "Clothing", inStock: true },
    { id: 3, name: "Coffee Maker", price: 89.99, category: "Electronics", inStock: false },
    { id: 4, name: "Book", price: 15.99, category: "Books", inStock: true },
    { id: 5, name: "Headphones", price: 149.99, category: "Electronics", inStock: true },
    { id: 6, name: "Jeans", price: 39.99, category: "Clothing", inStock: false },
    { id: 7, name: "Smartphone", price: 799.99, category: "Electronics", inStock: true },
    { id: 8, name: "Milk", price: 2.99, category: "Groceries", inStock: true }
  ];

  //4(1):-
  const filterdata = products.filter((products)=>products.category==="Electronics"&&products.inStock);
  console.log(filterdata);
 // 4(2)
 const Disscount=filterdata.map(product=>({...product, price:product.price*0.8}));
 console.log(Disscount);
//4(3)
const functionLowPrice =Disscount.find(products=>products.price===Math.min(...Disscount.map(p=>p.price)));
console.log(functionLowPrice);
function addition(a,b){
    console.log(a+b)
}
function calculation(x,y,callback){
    callback(x,y)
}
calculation(2,3,addition);
//calback hell
// function getdata(dataid,nextdata){
//     setTimeout(() => {
//         console.log(dataid)
//         if(nextdata){
//             nextdata();
//         }
//     },3000);
// }
// getdata(1,()=>{
//     console.log("Getting data...2")
//     getdata(2,()=>{
// console.log("getting data...3")
// getdata(3,()=>{
//     console.log("getting data ...4")
// getdata(4)
// })    
// })
// });

//Promises
//let Promise = new Promise((resolve,reject)=>{
//})
// let promise = new Promise((resolve,reject)=>{
//     console.log("This is a promise")
//     //resolve("success")
    //reject(123)
//})
// function getdatafun(dataid){
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log(dataid);
//     reso1ve("data displayed");
// },2000);
//     });
// }
// let funcfinal=getdatafun(8888);
// const getpromise=()=>
// {
//     return new Promise((resolve,reject)=>{
//         console.log("This is new promise");
//         //resolve("true")
//         reject("error")
//     })
// }
// let promise =getpromise();
// promise.then((res)=>{
//     console.log(res)
// })
// promise.catch((err)=>{
//     console.log(err)
// })

//promises chain
function getdatabypromise(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid)
            resolve("success")
        },3000)
    })
}
getdatabypromise(1).then((res)=>{
    return getdatabypromise(2);

})
.then((res)=>{
    return getdatabypromise(2);
})
.then((res)=>{
    return getdatabypromise(3);
})
.then((res)=>{
    return getdatabypromise(4);
})