class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}


class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(data){
        const newNode = new Node(data)
        if(!this.top){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pop(){
        let poppedEl = this.top.data
        if(!poppedEl){
            return console.log("this stack is empty")
        }else{
            this.top = this.top.next
            this.size--
        }
    }


    display(current = this.top){
       if(!current){
        return
       }
       let isPrime = true
       for(let i = 2; i< current.data; i++){
          if(current.data % i == 0){
             isPrime = false
          }
       }
     
       if(isPrime== true){
        console.log(current.data)
       }

       return this.display(current.next)
    }
}



const stack = new Stack()

stack.push(4)
stack.push(2)
stack.push(7)


stack.display()