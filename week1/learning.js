class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}


class Linked{
    constructor(){
        this.head = null
    }

    append(value){
        const NewNode = new Node(value)
        if(this.head == null){
            this.head = NewNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = NewNode
        }
    }

    print(){
        let current = this.head
        while(current){
            console.log(current)
            current = current.next
        }
    }

    pringReverse(){
        let current = this.head
        let reverseDatas = []
        while(current){
            reverseDatas.push(current.value)
            current = current.next
        }
        
  
    }

    delete(value){
        let current = this.head
        let previous = null
        while(current){
            if(current.value==value){
                if(previous ==null){
                    this.head = current.next
                }else{
                    previous.next = current.next
                }

                current = null;
                return; 
            }

            previous = current;
            current = current.next;
        }
    }

    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head 
        this.head = newNode
    }

    insertLast(value){
        const newNode = new Node(value)

        let current = this.head

        while(current){
            if(current.next == null){
                current.next = newNode
            }else{
                current = current.next
            }
        }
    }

    
}


const list = new Linked()

list.append(5)
list.append(7)
list.prepend(874)

list.print()
list.pringReverse()
