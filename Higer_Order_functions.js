//Functions - Also known as First-Class-Citizens.

// They can be assigned to a variable, passed as arguments, returned as fuctions, stored in DS.
 

//Function assigned to a variable.
function add(a,b){
    return a+b;
}

// console.log(add);
// console.log(add(2,3));
//memory is allocated for the whole function
//In memory it consists of this:window(reference to the outside window), a, b.


// o/p is same , but works different.

//memory is allocated for just the variable - sub.
let sub=function(a,b){
    return a-b;
}

// console.log(sub);
// console.log(sub(2,3));


//Functions passed as arguments to another function
//Higher Order Functions - function that takes one or more functions as arguments, or returns a function as its result.
function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

//HOFs
function operate(operationFunc,a,b){
    return operationFunc(a,b);
}

console.log(operate(sum,2,3)); // Here the reusuability of functions takes place

//Arrow Functions:
// kind of like if conditions ? true : false - if one line instruction.
//or set of instructions {}

let div =(a,b) => a/b;

let mod=(a,b) => {
    return a%b;
}

console.log(div(6,2));
console.log(mod(6,3));

//Function returned from another function

//outer function :
// Function with its Lexical scope(reference to outer variables) = Closure.


let a=10;
function outer(){ // outer is Closure
    let a=100;
    function inner(){
        console.log(a);
    }
    return inner();
}


let returnedFuncVar=outer();

a=20;

console.log(returnedFuncVar);
// returnedFuncVar(); // should be executed in browser env.
// returnedFuncVar();
// returnedFuncVar();
// returnedFuncVar();
// This leads to overconsumption of memory hence memory leaks.




