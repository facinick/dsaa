function longestPalindrome(s: string): number {
    
    const countMap = new Map()
    let x = 0

    for(let i=0; i<s.length; i++) {
        if(countMap.has(s.charAt(i))) {
            countMap.set(s.charAt(i), countMap.get(s.charAt(i)) + 1)
        } else {
            countMap.set(s.charAt(i), 1)
        }
    }

    for (let [character, count] of countMap) {
        x = x + Math.floor(count/2)
    }

    return x * 2 + (x * 2 < s.length ? 1 : 0)

}

export {
    longestPalindrome
}