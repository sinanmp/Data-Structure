function binary(arr,target){
    let leftIndex = 0 
    let rightIndex = arr.length-1
    
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex+ rightIndex) / 2)
        if(target == arr[middleIndex]){
            return middleIndex
        }

        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}


console.log(binary([-2,3,5,7,8,10],8))  
console.log(binary([-2,3,5,7,10],8))
console.log(binary([-2,3,5,7,8,10],10))

