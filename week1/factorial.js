function factorial(n){
    let fact = 1

    for(let i = n ; i >= 2 ; i--){
        fact= fact * i
    }
    return fact
}


console.log(factorial(5)); 
console.log(factorial(2)); 
console.log(factorial(10)); 