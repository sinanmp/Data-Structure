
let count = 1
function squar(n){
    if(n==0){
       return 0
    
    }
        console.log(count)
        count++
    return squar(n-1)
}


squar(14)