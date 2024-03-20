function quickSort(arr){

    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    for( let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i] > pivot){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)]
}




console.log(quickSort([5,2,5,1,6,21,5]))