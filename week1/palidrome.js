function isPalindrome(word, index = 0) {
    if (index === Math.floor(word.length / 2)) {
        return true;
    }

    if (word[index] !== word[word.length - 1 - index]) {
        return false;
    }
    index++
    return isPalindrome(word, index);
}

console.log(isPalindrome('aba'))