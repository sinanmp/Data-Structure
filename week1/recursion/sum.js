
let count = 1
function sum(n){
    if(n==0){
        return 0
    }

    console.log(count++ , "count")

    return n + sum(n-1)
}


console.log(sum(16))