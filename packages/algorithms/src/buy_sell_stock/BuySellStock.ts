function maxProfit(prices: number[]): number {
    
    if(prices.length === 0) {
        return 0
    }

    let maxProfit = 0
    let buy = prices[0]

    for(const price of prices) {
        // no point buying before this price
        // also we update buy only when we know
        if(price < buy) {
            buy = price
        }
        // there could be profit by selling here
        // but not sure of this will be max profit
        else {
            const currentProfit = price - buy
            if(currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }

    return maxProfit
};

export {
    maxProfit
}