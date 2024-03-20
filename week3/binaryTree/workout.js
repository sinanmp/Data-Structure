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


    add(value){
        if(!this.root){
            this.root = new Node(value)
        }else{
            this.addHelper(new Node(value) , this.root)
        }
    }


    addHelper(newNode , root){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.addHelper(newNode , root.left)
            }
        }else if(newNode.value > root.value){
            if(!root.right){
                root.right = newNode
            }else{
                this.addHelper(newNode , root.right)
            }
        }else{
            return console.log(newNode.value ,'this value is already have in bst')
        }
    }



    display(){
        if(!this.root){
            return console.log('this bst is empty')
        }else{
            this.inOrder(this.root)
        }
    }


    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }


    delete(value){
        let root = this.root
        if(root.value == value){
            root = null
        }else{
          root =  this.deleteHelper(root , value)
        }
    }




    deleteHelper(root , value){
        if(root == null){
            return root
        }


        if(value < root.value){
            root.left = this.deleteHelper(root.left , value)
            return root
        }else if(value > root.value){
            root.right = this.deleteHelper(root.right , value)
            return root
        }else{
            if(root.left && root.right){
                let smallest = this.smallest(root.right)
                root.value = smallest.value
                root.right = this.deleteHelper(root.right , smallest.value)
            }else{
                if(!root.left){
                    root = root.right 
                    return root 
                }else if(!root.right){
                    root = root.left
                    return root
                }else{
                    return null
                }
            }
            
        }
    }

    destroyBst(){
        this.root.left = 0 
        this.root.right = 0
    }


    isBst(){
        if(!this.root){
            return true
        }else{
            return this.isbstHelper(this.root)
        }
    }

    isbstHelper(root, min = null, max = null) {
        if (!root) {
            return true;
        }
    
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
            return false;
        }
    
        return (
            this.isbstHelper(root.left, min, root.value) &&
            this.isbstHelper(root.right, root.value, max)
        );
    }
    

    smallest(currendNode){
        if(!currendNode.left){
            return currendNode
        }
        this.smallest(currendNode.left)
    }
}


const bst = new BinarySearchTree()


bst.add(3)
bst.add(4)
bst.add(76)
bst.add(75)
bst.add(43)

console.log(bst.isBst())
bst.display()