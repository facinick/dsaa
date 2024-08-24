function mergeAlternately(word1: string, word2: string): string {
    if(word1 === "") return word2
    if(word2 === "") return word1

    let merged = ""

    const length = word1.length + word2.length

    for(let i=0; i<length; i++) {
        if(i < word1.length) {
            merged += word1.charAt(i)
        }

        if(i < word2.length) {
            merged += word2.charAt(i)
        }
    }

    return merged
};

export {
    mergeAlternately
}