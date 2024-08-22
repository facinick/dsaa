// O(n^3)
// function threeSumSlow(nums: number[]): number[][] {
    
// }
// O(n^2logn)
function threeSumOne(nums: number[]): number[][] {

    const solutions = new Set<string>()
    const result = []

    nums.sort((a, b) => a - b)

    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            const target = -(nums[i] + nums[j])
            const k = nums.indexOf(target, j + 1) // Start search after j

            if (k !== -1) {
                const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                const tripletStr = triplet.join(',')
                if (!solutions.has(tripletStr)) {
                    solutions.add(tripletStr)
                    result.push(triplet)
                }
            }

        }
    }

    return result
};

// O(n^2)
function threeSum(nums: number[]): number[][] {

    const solutions = new Set()
    const result = []
    let n = nums.length

    nums.sort((a, b) => a - b)

    let i=0;
    let j=i+1, k=nums.length - 1

    for(let i=0; i<n-2; i++) {

        // if (i > 0 && nums[i] === nums[i - 1]) continue

        let j=i+1
        let k=n-1

        while(j < k) {

            const sum = nums[j] + nums[k] + nums[i]

            if(sum === 0) {
                if(!solutions.has(`${nums[i]}${nums[j]}${nums[k]}`)) {
                    result.push([nums[i], nums[j], nums[k]])
                    solutions.add(`${nums[i]}${nums[j]}${nums[k]}`)
                }
                j++
                k--
                continue
            }


            if(sum > 0) {
                k--
            } else {
                j++
            }
        }

    }

    return result
};

// O(n^2) with other optimisations for duplicate stuff
function threeSumThree(nums: number[]): number[][] {
    const result: number[][] = []
    const n = nums.length

    nums.sort((a, b) => a - b)

    for (let i = 0; i < n - 2; i++) {
        // Skip the same element to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let j = i + 1
        let k = n - 1

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])

                // Skip duplicates for nums[j] and nums[k]
                while (j < k && nums[j] === nums[j + 1]) j++
                while (j < k && nums[k] === nums[k - 1]) k--

                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return result
}