class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let currendIndx = this.heap.length - 1

        while(currendIndx > 0){
            let parentIndex = this.getParendIndex(currendIndx)
            if(this.heap[currendIndx] < this.heap[parentIndex]){
                this.swap(parentIndex , currendIndx)
                currendIndx = parentIndex
            }else{
                break
            }
        }
    }


    extractMin(){
        if(this.heap.length == 0 ){
            return console.log("this heap is empty")
        }else if(this.heap.length == 1){
            return this.heap.pop()
        }else{
            let element = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.heapifuDown()
            console.log(element , ' is removed')
            return element
        }
    }



    heapifuDown(){
        let currendIndex = 0 

        while(currendIndex >= 0){
            let leftIndex = this.getLeftChildIndex(currendIndex)
            let rightIndex = this.getRightChildIndex(currendIndex)
            let smallest = currendIndex
            if(this.heap[leftIndex] < this.heap[smallest]){
                smallest = leftIndex
            }
            if(this.heap[rightIndex] < this.heap[smallest]){
                smallest = rightIndex
            }

            if(smallest == currendIndex){
                break
            }

            this.swap(smallest , currendIndex)
            currendIndex = this.getParendIndex(smallest)
        }
    }


    display(){
        console.log(this.heap)
    }


    getParendIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index){
        return index * 2 + 1
    }


    getRightChildIndex(index){
        return index * 2 + 2
    }

    swap(i , j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }


    


}



const heap = new MinHeap()


heap.insert(4)
heap.insert(6)
heap.insert(3)
heap.insert(34)
heap.insert(0)
heap.extractMin()
heap.extractMin()

heap.display()