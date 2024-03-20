
// function mergesort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     const mid = Math.floor(arr.length /2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)

//     return merge(mergesort(leftArr) , mergesort(rightArr))
// }

// function merge(leftArr, rightArr){
//     const sortArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] >= rightArr[0]){
//             sortArr.push(rightArr.shift())
//         }else{
//             sortArr.push(leftArr.shift())
//         }
//     }

//     return [...sortArr , ...leftArr , ...rightArr]
// }


// console.log(mergesort([3,2,1,6,97,5]))
