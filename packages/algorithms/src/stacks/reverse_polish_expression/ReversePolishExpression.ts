function applyOperator(a: number, b: number, operator: string) {
    switch(operator) {
        case '+': {
            return a+b;
            break;
        }
        case '-': {
            return a-b;
            break;
        }
        case '/': {
            return Math.trunc(a/b);
            break;
        }
        case '*': {
            return a*b;
            break;
        }
        default: {
            throw new Error(`Invalid operator`)
        }
    }
}

/*
    Assumes a valid Reverse Polish Expression as an array of string
    Each element of input is either an operator or an operand in string form
    Operators supported: "-", "+", "/"(truncates to 0), "*"
    Operands spported: Integers belonging to range [-200, 200]
    Output: number
*/
function evalRPN(tokens: string[]): number {
    
    const operands: number[] = []

    if(tokens.length === 0) {
        return 0
    }

    tokens.forEach((token => {

        if(!isNaN(parseInt(token))) {
            operands.push(parseInt(token))
        }

        else {
            const operand2 = operands.pop()
            const operand1 = operands.pop()

            if(operand2 === undefined || operand1 === undefined)
            throw new Error(`Invalid expression`)

            const result = applyOperator(operand1, operand2, token)
            operands.push(result)
        }

    }))

    if(operands.length !== 1)
    throw new Error(`Invalid expression`)

    return operands.pop()!
};

export {
    evalRPN
}