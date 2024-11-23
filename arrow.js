// previous function declaration

function sum1(a,b){
    const result = a+b;
    return(result);
}
const sum= sum1(3,4);
console.log(sum)


const sum2 = function(c, d) {
    return c+d;
}
console.log(sum2(3, 9));

//arrow function
const variable = (c,d) => (c+d);
const addVariable= variable(3,3);
console.log(addVariable)


// more arrow function
const getAge = (person) => {person.age}

const student = {name: 'ananta', age: 14}
const age = getAge(student)
console.log(student)