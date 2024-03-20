

class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}


class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
      }
    

      append(value) {
        const newNode = new Node(value);
    
        if (this.head == null) {
          this.head = newNode;
          return;
        }
    
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        this.size++; 
      }

      display() {
        let current = this.head;
        while (current) {
          console.log(`Value: ${current.value}, Size of List: ${this.size}`);
          current = current.next;
        }
      }

    findlargest(){
        let currunt = this.head
        let largest = currunt.value
        while(currunt){
            if(currunt.value > largest){
                largest = currunt.value
            }
            currunt = currunt.next
        }
        return console.log(largest)
    }


    findsmallest(){
        let currunt = this.head
        let smallest = currunt.value

        while(currunt){
            if(currunt.value < smallest){
                smallest = currunt.value
            }
            currunt = currunt.next
        }
        return console.log(smallest)
    }


    findTotalSum(){
        let currunt = this.head
        let sum = 0

        while(currunt){
            sum+=currunt.value
            currunt = currunt.next
        }
        return console.log(sum)
    }

    findAElement(value){
        let currunt = this.head

        while(currunt){
            if(currunt.value == value){
                return console.log(currunt)
            }
            currunt = currunt.next
        }
    }

        
        insertBeginning(value) {
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.size++; // Increment the size property of the LinkedList
        }

    displayHead(){
        console.log(this.head)
    }

    insertAtLast(value){
        const newNode = new Node(value)
        let currunt = this.head
        while(currunt){
            if(currunt.next == null){
                currunt.next = newNode
                console.log(newNode)
                break;
            }else{
            currunt = currunt.next
            currunt.size++
            }
        }
    }

    getArray(){
        let currunt = this.head
        let arr =[]
        while(currunt){
            arr.push(currunt.value)
            currunt = currunt.next
        }
        return console.log(arr)
    }

    insertSpecific(value , index){

        if(index < 0 || index > this.size){
            return console.log("please enter valid index")
        }

        if(index == 0){
            this.insertBeginning(value)
        }else{
            const NewNode = new Node(value)

            prev = this.head
            for(let i=0 ; i < index-1 ; i++){
                prev = prev.next
            }
            NewNode.next=prev.next
            prev.next = NewNode
        }

    }
    
}


const list = new LinkedList()

let arr = [6,4,3,3,23,6,3]

for(let i=0; i<arr.length ; i++){
    list.append(arr[i])
}



list.display()



