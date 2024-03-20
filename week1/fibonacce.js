

function fibonacci(n){
    const fib = [0,1]  //o(1) of timecomplxcity and o(1) of space complixity
    
    for(let i = 2 ; i < n ; i++){  // loop is repetation of assining line 
        fib[i] = fib[i-1] + fib[i-2]  // o(n)  is time complixcity and o(n) is space complixity 
    }
    return fib  // o(1) is time complixity 
}


console.log(fibonacci(10))
console.log(fibonacci(5))
console.log(fibonacci(7))