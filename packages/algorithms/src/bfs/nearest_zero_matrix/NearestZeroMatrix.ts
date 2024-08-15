function NearestZeroMatrix(mat: number[][]): number[][] {
    const rows = mat.length
    const cols = mat[0].length
    const minDistMat = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    // stores [i,j] if minDistance of [i,j] from a 0 is found. So we can update its neighbours
    const queue: Array<[number, number]> = new Array()

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            if(mat[i][j] === 0) {
                minDistMat[i][j] = 0
                // as numbers that are 0, are already 0 distance away from nearest 0, so their solution is found
                queue.push([i,j])
            }
        }
    }

    while(queue.length > 0) {
        const [x,y] = queue.shift()!

        for(let [dx,dy] of directions) {

            // neighbour cell
            const nx = x+dx
            const ny = y+dy

            if(
                nx >= 0 &&
                nx < rows &&
                ny >= 0 &&
                ny < cols
                ) {
                    if(1 + minDistMat[x][y] < minDistMat[nx][ny]) {
                        // found new solution
                        minDistMat[nx][ny] = 1 + minDistMat[x][y]
                        queue.push([nx,ny])
                    }
                }
        }
    }

    return minDistMat
}

export {
    NearestZeroMatrix
}