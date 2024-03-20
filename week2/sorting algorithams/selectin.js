let arr = [64, 25, 12, 22, 11]
let temp = 0
let newArray = []


function selection(arr , temp =arr.length-1){

    if(temp == 0 ){
        return arr
    }

    let temp1 = 0
    for(let j=temp; j>=0;j--){
        if(arr[temp]<arr[j]){
            temp1 = arr[temp]
            arr[temp] = arr[j]
            arr[j] = temp1
        }
    }
    return selection(arr , temp-1)
}

console.log(selection(arr))

