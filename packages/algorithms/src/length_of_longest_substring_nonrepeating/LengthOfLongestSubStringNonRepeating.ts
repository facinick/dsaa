function lengthOfLongestSubstring(s: string): number {
    
    if(s.length === 0) {
        return 0
    }

    let elements = new Set()

    let longestLength = 0

    let leftIndex = 0
    let rightIndex = 0

    while(rightIndex <= s.length - 1) {
        while(elements.has(s.at(rightIndex))) {
            elements.delete(s.at(leftIndex))
            leftIndex++
        }

        elements.add(s.at(rightIndex))
        if(elements.size > longestLength) {
            longestLength = elements.size
        }

        rightIndex++
    }

    return longestLength

};

export {
    lengthOfLongestSubstring
}