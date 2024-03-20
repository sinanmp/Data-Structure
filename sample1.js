class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}



class BinarySearchTree{
    constructor(){
        this.root = null
    }


    insert(value){
        const NewNode= new Node(value)
        if(!this.root){
            this.root = NewNode
        }else{
            this.insertHelper(this.root,NewNode)
        }
    }

    insertHelper(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertHelper(root.left , newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertHelper(root.right , newNode)
            }
        }
    }



    getSmallest(root){
        if(root.left == null){
            return root.value
        }
        return this.getSmallest(root.left)
    }
}





const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(9)
bst.insert(5)


console.log(bst.getSmallest(bst.root))