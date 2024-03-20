// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0 ; i< key.length; i++){
//             total += key.charCodeAt(i)
//         } 
//         return total % this.size
//     }


//     set(key , value){
//         const index = this.hash(key)
//         this.table [index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index] , index
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }


//     display(){
//         for(let i = 0 ; i< this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(this.table[i])
//             }
//         }
//     }
// }


// const table = new HashTable(50)


// table.set('d' , '18')
// table.set('f' , 'dilshad')
// table.set('s' , 'koduvally')
// console.log(table.get('s'))

// table.display()




class HashTable{
    constructor(size){
        this.items = new Array(size)
        this.size = size
    }


    hash(key){
        let total = 0 
        for(let i=0 ; i< key.length ; i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key , value){
        let index = this.hash(key)
        this.items[index] =  value
    }

    get(key){
        let index = this.hash(key)
        console.log(this.items[index])
    }

    displayAll(){
        for(let i=0 ; i<this.items.length ; i++){
            if(this.items[i]){
                console.log(this.items[i])
            }
        }
    }
}



const hash = new HashTable(50)


hash.set('name1' , 'sinan')
hash.set('age' , '18')
hash.set('place' , 'koduvally')
hash.set('education' , '+2')
hash.set('ecalp' , 'kozhikkode')

hash.get('place')



