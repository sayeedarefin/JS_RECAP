//without default value

function sum(num1, num2){
    let result = num1 + num2;
    console.log(num1, num2, result);
    return(result);
}
sum(1, 2);
sum(1); // output: 1 undefined NaN
// add(,1); // output: error
sum()



//with default value

function add(num1=0, num2=0){
    let result = num1 + num2;
    console.log(num1, num2, result);
    return(result);
}
add(1, 2);
add(1); // output: 1 undefined NaN
// add(,1); // output: error
add()

function fullName(first, last=''){
    const full = first + ' ' +last;
    console.log(full);
    return full;
}
// fullName(sayeed, arefin) not right
fullName('sayeed', 'arefin');

function friends(numbs =[]){
    if(numbs.length == 0){
        console.log("No friends found");
    }
    else{
        numbs.forEach((num, index) =>{
            console.log(`Friend ${index + 1}: ${num}`);
        });
    }
}

friends([01818, 01897, 01989]);