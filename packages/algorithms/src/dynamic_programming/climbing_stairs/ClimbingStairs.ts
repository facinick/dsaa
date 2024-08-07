/*
    N_STEP[k] = N_STEP[k-1] + N_STEP[k-2]
*/

let cache: number[] = []

function N_STEP(k:number): number {

    if(cache[k] !== undefined) {
        return cache[k]
    }

    if((k === 1) || (k === 2)) {
        cache[k] = k
        return cache[k]
    }

    cache[k] = N_STEP(k-2) + N_STEP(k-1)
    return cache[k]
}

function climbStairs(n: number): number {
    cache.length = 0
    return N_STEP(n)
};

export {
    climbStairs
}