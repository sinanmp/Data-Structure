    deleteHelper(value, node){
        if(node == null){
            return node
        }

        if(value < node.value){
            node.left = this.deleteHelper(value ,node.left)
            return node
        }else if(value > node.value){
            node.right = this.deleteHelper(value , node.right)
            return node
        }else{
            if(node.left && node.right){
                let smallest = this.findSmallestNode(node.right)
                node.value = smallest.value
                node.right = this.deleteHelper(smallest.value , node.right)
                return node
            }else{
                if(node.left){
                    node = node.left 
                    return node
                }else if(node.right){
                    node = node.right 
                    return node
                }else{
                    node.value == null
                    return node
                }
            }
        }
    }