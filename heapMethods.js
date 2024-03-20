class HeapMethods{
    getParentIndex(i){
        return Math.floor((i - 2) / 2 )
    }

    getRightIndex(i){
        return i * 2 + 1
    }

    getLeftIndex(i){
        return i * 2 + 2
    }
}


module.exports = HeapMethods