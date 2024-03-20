class Maxheap{
    constructor(arr){
        if(arr){
            for(let i=0 ; i< arr.length ; i++){
                this.insert(arr[i])
            }
        }
        this.heap = []
    }


    getParentIndex(index){
        return Math.floor(index - 1 /2)
    }

    getLeftChildIndex(index){
        return index * 2 + 1
    }

    getRightChildIndex(index){
        return index * 2 + 2
    }

    getEndIndex(){
        return this.heap.length-1
    }

    swapp(index1 , index2){
        [this.heap[index1] , this.heap[index2]] = [this.heap[index2] , this.heap[index1]]
    }


    heapifyUp(){
        let lastChild = this.heap(this.getEndIndex())
    }
}