function mergeSort(arr){
    if(arr.length <= 1 ){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArtt = arr.slice(mid)

    return merge(mergeSort(leftArr) , mergeSort(rightArtt))
}


function merge(leftArr , rightArr){
    let sortArr = []

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            
        }
    }
}