const person={
    name: 'ananta',
    age: 35,
    gender: 'Male',
    phone: 1212212121,
    status: 'inactive'
}
// old destructuring method

// const name = person.name;
// const age = person.age;
// const gender = person.gender;
// const phone = person.phone;
// const status = person.status;

// console.log(name)
// console.log(age)
// console.log(gender)
// console.log(phone)
// console.log(status)



// using pbject destructuring

const { name, age : boyos, gender, phone, status } = person;

console.log(name);
// console.log(age);
console.log(boyos);
console.log(gender);
console.log(phone);
console.log(status);

//array destructuring

const numbers = [23,34]
const [first, second] = numbers;
const [x,y]= [12,34]

// function

function double(a,b){
    return [a*2, b*2];
}

const [prothom, ditiyo]= double(2,3);
console.log(prothom, ditiyo)

//skipping items in an array
let [num1,,num3]= [1,2,3]
console.log(num1)
console.log(num3)