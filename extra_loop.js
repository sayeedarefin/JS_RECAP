const numbers = [1,4,7,8,9];
for (const num of numbers) {
    console.log(num);
}

const nobab ="siraj ud doula";
for (const char of nobab) {
    console.log(char);
}

const glass ={
    color: 'red',
    price: 56,
    isclean: true,
    quantity: 78
}
// for (const keys of glass) {
//     console.log(keys); //error
// }
for (const keys in glass) {
    console.log(keys);
}