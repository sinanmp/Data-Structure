class Heap{
    constructor(arr){
        if(arr){
            this.heap = arr
            this.buildHeap()
        }else{
            this.heap = []
        }
    }


    buildHeap(){
        let index = this.heap.length - 1
        for(let i = this.getParentIndex(index) ; i >= 0 ; i--){
            this.heapifyUp(i)
        }
    }


    heapifyDown(currentIndex){
       let endIndx = this.heap.length - 1
       let leftIndex = this.getLeftChildIndex(currentIndex)

       while(leftIndex <= endIndx){
            let rightIndex = this.getRightChildIndex(currentIndex)
            let indexToShift; 
            if(rightIndex < endIndx && this.heap[rightIndex] < this.heap[leftIndex]){
                indexToShift = rightIndex
            }else{
                indexToShift = leftIndex
            }

            if(this.heap[indexToShift] < this.heap[currentIndex]){
                this.swapp(indexToShift,currentIndex)
                currentIndex = indexToShift
                leftIndex = this.getLeftChildIndex(currentIndex)
            }else{
                return
            }
       }
    }

    display(){
        console.log(this.heap)
    }

    heapifyUp(currendIndx){

    }


    getParentIndex(i){
        return Math.floor(i / 2) 
    }

    getLeftChildIndex(i){
        return 2 * i + 1
    }

    getRightChildIndex(i){
        return 2 * i + 2
    }

    swapp(i , j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]   
    }
}




const heap = new Heap([4,5,2,5,6,2,1,32,4,232,42])

heap.buildHeap()    
heap.display()
