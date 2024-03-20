class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class Queue{
    constructor(){
        this.front = null 
        this.rear = null
        this.size = 0
    }

    enqueue(data){
        const newNode = new Node(data)

        if(!this.front){
            this.front = newNode
            this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    display(){
        let current = this.front

        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    deleteSpec(data){
        let current = this.front 
        let prev = null

        while(current){
            if(current.data == data){
                if(current == this.front){
                    this.front = this.front.next
                }else{
                    prev.next = current.next
                }
            }
            prev = current 
            current = current.next
        }
    }
}




const queue = new Queue()

queue.enqueue(2)
queue.enqueue(6)
queue.enqueue(9)
queue.enqueue(1)
queue.deleteSpec(9)

queue.display()