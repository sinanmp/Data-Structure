class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let currendIdx = this.heap.length-1
        let parentIndex = this.getParentIndex(currendIdx)

        while(currendIdx > 0){
            if(this.heap[currendIdx] > this.heap[parentIndex]){
                this.swapp(currendIdx , parentIndex)
                currendIdx = parentIndex
                parentIndex = this.getParentIndex(currendIdx)
            }else{
                break
            }
        }
    }

    heapSort(){
        let length = this.heap.length
        let sortedArray = []
        while(true){
            if(length == sortedArray.length){
                break
            }
            sortedArray.unshift(this.extractLargest())
        }
        return sortedArray[0]
    }


    heapifyDown(){
        let currendIdx = 0 
        
        while(true){
            let leftIndex = this.getLeftChildIndex(currendIdx)
            let rightIndex = this.getRightChildIndex(currendIdx)
            let largest = currendIdx
            if(this.heap[leftIndex] > this.heap[largest]){
                largest = leftIndex
            }
             if(this.heap[rightIndex] > this.heap[largest]){
                largest = rightIndex
             }


             if(largest == currendIdx){
                break
             }

             this.swapp(largest,currendIdx)
             currendIdx = largest
        }
    }


    extractLargest(){
        let element = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return element
    }
    
    getParentIndex(i){
        return Math.floor((i - 1) / 2 )
    }

    getRightChildIndex(i){
        return i * 2 + 2
    }

    getLeftChildIndex(i){
        return i * 2 + 1 
    }

    swapp(i, j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }

    display(){
        console.log(this.heap)
    }

}




const heap = new MaxHeap()

heap.insert(37)
heap.insert(3)
heap.insert(54)
heap.insert(5)
heap.insert(32)
heap.insert(0)

heap.heapSort()
heap.display()