// Functions  - reference types : object



//how js executes :
//everytime code is executed, 
//an Execution Context(EC) is created (initially GEC is created)
//if new func is created new EC is created and added to the call Stack

//Global Execution Context(GEC) : env constituting the variables, objs etc   - 2 phases: 
//1. Memory Phase - variable environment - allocate the memory for the variables.
//2. Code phase - Synchronous line by line single threaded Execution. - line by line execution.

//Hoisting - concept of being able to access or extract variables b4 initializing them is called -''-

//here the functions is called even b4 it is created : why ?
create("ece");

function create(course){
    console.log("creating ",course);
}

create("dsa");

// another ex :

console.log(x); //undefined - due to memory phase executed first.
var x=10; // only for var not for let,const bcoz value unavailable.
console.log(x); // 10 - after the var is initialized and declared.

//console.log(a)==console.log(this.a)==console.log(window.a) --> which means variables are from global object.
//window - shows the global objects created.

// 3 ways to declare variables
// 1. const - value cannot be changed. -strict , They are block scoped -RE
// 2. let - value can be changed. -strict , they are block scoped -RE
// 3. var - global scoped

// Temporal Dead zone - Period between declaration and initialization for const,let where reference error occurs.

//decalare variables at the top of the code.

console.log("temporal dead zone : ");
console.log(c);

let a=10; // declared in script and value unavailable
const b=20; // declared in script and value unavailable
var c=30; // declared in global and initialized with undefined.

console.log(c);

// example for block scoped and global 
{
    let l=10;
    const m=20; 
    var n=330;
    console.log(l);
    console.log(m);
}

console.log(n);

//Lexical scope - Checks local scope, if not there then global scope.

// functions have local context(created only when function is called).
function hello(){
    let x=10;
    console.log(x); // 10 - bcoz local has more precedence than global(outer scope) not vice versa.
}

let x=100;
hello();

