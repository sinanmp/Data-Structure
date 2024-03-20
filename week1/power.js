function isPowerOffTwo(n){
    if( n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 != 0){
            return false
        }
        n= n / 2
    }
    return true
}

console.log(isPowerOffTwo(1))
console.log(isPowerOffTwo(5))
console.log(isPowerOffTwo(2))
