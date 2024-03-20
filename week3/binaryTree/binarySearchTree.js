class Node{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}



class BST{
    constructor(){
        this.root = null
    }


    insert(value){
        let newNode = new Node(value)

        if(!this.root){
            this.root = newNode
        }else{
            this.insertHelper(this.root , newNode)
        }
    }



    insertHelper(root , newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertHelper(root.left, newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertHelper(root.right , newNode)
            }
        }
    }


    getSmallest(curruntNode){
        if(curruntNode.left == null){
            return curruntNode
        }
         return this.getSmallest(curruntNode.left)
    }
    


    deleteNode(value){
        if(!this.root){
            return console.log("this bst is empty")
        }else{
            this.root = this.deleteHelper(this.root , value)
        }
    }



    deleteHelper(root , value){
        if(!root){
            return null
        }


        if(value < root.value){
            root.left = this.deleteHelper(root.left , value)
            return root
        }else if(value > root.value){
            root.right = this.deleteHelper(root.right , value)
            return root 
        }else{
            if(root.right && root.left){
                let smallest = this.getSmallest(root.right)
                root.value = smallest.value
                root.right = this.deleteHelper(root.right , smallest.value)
                return root
            }else{
                if(root.right){
                    root = root.right 
                    return root
                }else if(root.left){
                    root = root.left
                    return root
                }else{
                    return null
                }
            }
        }
    }


    isBst(){
        if(!this.root){
            return console.log('this tree is empty')
        }else{
            return this.isBstHelper(this.root , -Infinity , Infinity )
        }
    }


    isBstHelper(root , min, max ){
        if(!root){
            return true;
        }

        console.log(max)
        if(root.value <= min  || root.value >= max){
          
            return false;
        }
        

        return (
            this.isBstHelper(root.left , min , root.value) && 
            this.isBstHelper(root.right , root.value , max)
        )
    }

    display(){
        if(!this.root){
            return console.log("this bst is empty")
        }else{
            this.inOrderTraversel(this.root)
        }
    }

    inOrderTraversel(root){
        if(root){
            this.inOrderTraversel(root.left)
            console.log(root.value)
            this.inOrderTraversel(root.right)
        }
    }
}




const bst = new BST()

bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(59)
bst.insert(52)
bst.insert(1)
console.log(bst.isBst())

bst.deleteNode(4)



