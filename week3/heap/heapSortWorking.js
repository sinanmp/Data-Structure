class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
       let currentIndex = this.heap.length - 1

        while(currentIndex > 0){
            const parentIndex = Math.floor((currentIndex-1)/2)
            if(this.heap[currentIndex] > this.heap[parentIndex]){
                //swapp the values
                let temp = this.heap[currentIndex]
                this.heap[currentIndex] = this.heap[parentIndex]
                this.heap[parentIndex] = temp
                currentIndex = parentIndex
            }else{
                break
            }
        }
    }


    removeMax(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1 ) return this.heap.pop() 

        const maxValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return maxValue
    }

    heapifyDown(){
        let currentIndex = 0
        while(currentIndex < this.heap.length){
            let leftChildIndex = currentIndex * 2 + 1
            if(leftChildIndex >= this.heap.length) break
             let rightChildIndex = currentIndex * 2 + 2
             let indexToShift;
             if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]){
                indexToShift = rightChildIndex
             }else{
                indexToShift = leftChildIndex
             }

             if(this.heap[indexToShift] > this.heap[currentIndex]){
                let temp = this.heap[indexToShift]
                this.heap[indexToShift] = this.heap[currentIndex]
                this.heap[currentIndex] = temp
                currentIndex = indexToShift
             }else{
                break
             }
        }
    }



    display(){
        console.log(this.heap)
    }



}


function heapSort(arr){
    const heap = new MaxHeap()

    for(let i = 0 ; i < arr.length ; i++){
        heap.insert(arr[i])
    }

    let sortedArray = []

    while(heap.heap.length > 0){
        sortedArray.unshift(heap.removeMax())
    }

    return sortedArray

}



console.log(heapSort([3,5,2,6,11,5,621,1,5,2]))