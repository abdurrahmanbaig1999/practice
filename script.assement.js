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

