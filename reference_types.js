// Reference types - Objects, Arrays, Functions

//Objects - Collection of key value pairs (set).

let student={
    name: "Rahman",
    job: "none",
    description: "Useless piece of shit"
};

console.log(typeof(student));
// undefined if key/value is not found.

// 2 ways to access key/value
//dot notation
console.log(student.name);
//package notation
console.log(student['description']);

//difference b/w value types and reference types
let x="rahman";
let y=x;

x="educosys";

console.log("X :",x); //damn there's difference b/w ',' & '+', in this there's space.
console.log("Y :"+y); // in concat theres no space while printing.
//y remained same 'Copy-by-value' - Value types.

let ref={name: "keerthi"}
let q=ref;

ref.name="rahman";

console.log(ref);
console.log(q);
//value changes bcoz 'Copied the reference' - Reference types.

