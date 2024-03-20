class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        const NewNode = new Node(value)

        if(this.head == null){
            this.head = NewNode
            this.size = 1
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = NewNode
            this.size++
        }
    }

    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
        console.log(this.size)
    }

    checking(){
        let current = this.head
        let size = 0
        while(current){
            if(size > this.size){
                return true
            }else{
                current = current.next
                size++
            }
        }

        return false

    }
    

}




const list = new LinkedList()


list.append(1)
list.append(2)
list.append(3)
list.append(4)



list.print()
console.log(list.checking())
