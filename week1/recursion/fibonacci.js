
  function recursivefibonacci(n){
    if(n < 2){
        return n
    }
    return recursivefibonacci(n-1) + recursivefibonacci(n-2)
  }

  console.log(recursivefibonacci(8))
