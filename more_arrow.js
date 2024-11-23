// more arrow function
const getAge = (person) => person.age

const student = {name: 'ananta', age: 14}
const teacher = {name: 'jashim', age: 34}
const stuff = {name: 'pollob', age: 44}

// const age = getAge(student)

console.log(getAge(student))
console.log(getAge(teacher))
console.log(getAge(stuff))

const getResult = (Public)=>Public.result
const afia = {age: '12', result:2.33}

console.log(getResult(afia))

const getThird = (numbers) => numbers[2]
const numbers = [1,4,7,8,9]
console.log(getThird(numbers))

// no parameter
const getPI = () => Math.PI
console.log(getPI())

//large function: if you want to get anything from this function, then you have to use return keyword

const doMath = (x,y,z) =>
{
    const sum = x+y+z;
    const mult = x*y*z;
    const result2 = sum/mult
    return result2

}