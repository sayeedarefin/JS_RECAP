const max = Math.max(1,2,3,4,5,6,7,8)
console.log(max)

//in case of arrays, use ... before the array name
const numbers = [2,3,4,333,45,23,12,45,666,342]
console.log(Math.max(...numbers))


//use spread operator to copy
const friends = [2,4,5,6,7]
const bondhu = friends

// const x = bondhu.push(100)
// console.log(friends)
// console.log(bondhu)

const dosto = [...friends] //copy
console.log(dosto)

friends.push(8000)
// const dosto2 = [...friends]
console.log(dosto)
console.log(friends)

// advanced
const sonkha = [...friends, 9999]
console.log(sonkha)