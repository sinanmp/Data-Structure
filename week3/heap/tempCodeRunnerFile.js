    heapifyUp(){
       let currendIdx = this.heap.lenght -1 
       let parentIndex = this.getParentIndex(currendIdx)

       while(parentIndex > 0){
        if(this.heap[currendIdx] < this.heap[parentIndex]){
            [this.heap[currendIdx] , this.heap[parentIndex]] = [this.heap[parentIndex] , this.heap[currendIdx]]
            currendIdx = parentIndex
        }else{
            break
        }
       }
    }