class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfAWord = false
    }
}



class Trie{
    constructor(){
        this.root = new TrieNode()
    }


    insert(word){
        let root = this.root
        for(let char of word){
            if(!root.children[char]){
                root.children[char] = new TrieNode()
            }
            root = root.children[char]
        }
        root.isEndOfAWord = true
    }

    displayAllWords(){
        let words = []
        this.travers(this.root,'',words)
        console.log(words)
    }

    travers(root , prefix , words){
        if(root.isEndOfAWord){
            words.push(prefix)
        }


        for(let char in root.children){
            this.travers(root.children[char],prefix + char ,words)
        }
    }


    prefixWithAllWords(prefix){
        let words = []
        let prefixNode = this.getPrefixNode(prefix)
        if(prefixNode){
            this.travers(prefixNode , prefix , words)
        }
        console.log(words)
        return words
    }


    getPrefixNode(prefix){
        let root = this.root 
        for(let char of prefix){
            if(!root.children[char]){
                return null
            }else{
                root = root.children[char]
            }
        }
        return root
    }


  
}


const trie = new Trie()



trie.insert('sinan')
trie.insert('priyan')
trie.insert('shamil')
trie.insert('yasin')
trie.insert('muhammed')
trie.prefixWithAllWords('sinan')
trie.displayAllWords()