// Functions  - reference types : object

//Hoisting - concept of being able to access or extract variables b4 initializing them is called -''-

//how js executes :
//everytime code is executed, 
//an EC is created (initially GEC is created)
//if new func is created new EC is created and added to the call Stack

//Global Execution Context(GEC) : env constituting the variables, objs etc   - 2 phases: 
//1. Memory Phase - variable environment - allocate the memory for the variables.
//2. Code phase - Synchronous line by line single thread Execution. - line by line execution.

//here the functions is called even b4 it is executed : why ?
create("ece");

function create(course){
    console.log("creating ",course);
}

create("dsa");

// another ex :

console.log(x); //undefined - due to memory phase executed first.
var x=10;
console.log(x); // 10 - after the var is initialized and declared.



