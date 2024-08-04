const openingP: Record<string, string> = {
    '(' : '(',
    '{' : '{',
    '[' : '['
}

const openingPForClosingP: Record<string, string> = {
    ')' : '(',
    '}' : '{',
    ']' : '['
}

function isValidParenthesisString(s: string): boolean {
    
    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        if(openingP[s.charAt(i)]) {
            stack.push(s.charAt(i))
        } else {
            const top = stack.at(-1)
            if(top == openingPForClosingP[s.charAt(i)]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    if(stack.length === 0) {
        return true
    }
    
    return false
};

export {
    isValidParenthesisString
}