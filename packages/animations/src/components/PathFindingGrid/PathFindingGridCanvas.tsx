// import { useEffect, useMemo, useRef, useState } from 'react'
// import styles from './PathFindingGrid.module.css'
// import { someDistance } from './heuristic'
// import { binary_terrain, empty_terrain } from './terrain'
// import { HeapNode, Heap } from './priority-queue'
// import { Canvas } from '@react-three/fiber'

// function getRandomTerrainCost() {
//     const randomIndex = Math.floor(Math.random() * binary_terrain.length)
//     return binary_terrain[randomIndex]
// }

// class Cell extends HeapNode<Cell> {

//     public readonly x: number
//     public readonly y: number
//     public readonly z: number = 0
//     public readonly difficulty: number

//     public gCost: number = Infinity
//     public hCost: number = 0

//     public _heapIndex: number = 0

//     public parent: Cell | null = null

//     constructor(
//         x: number,
//         y: number,
//         difficulty: number
//     ) {
//         super()
//         this.x = x
//         this.y = y
//         this.difficulty = difficulty
//         this.x = x
//     }

//     // returns more if higher priority?
//     public compareTo(other: Cell): number {
//         const compare = this.fCost - other.fCost
//         if (compare === 0) {
//             return this.hCost - other.hCost
//         }
//         return -compare
//     }

//     public get fCost() {
//         return this.gCost + this.hCost
//     }

//     public get heapIndex() {
//         return this._heapIndex
//     }

//     public set heapIndex(index: number) {
//         this._heapIndex = index
//     }
// }

// function getBackgroundColor(terrainCost: number): string {
//     // Calculate the grayscale value (0 for white, 255 for black)
//     // const grayValue = Math.round((1 - terrainCost) * 255)
//     // return `rgb(${grayValue},${grayValue},${grayValue})`
//     return terrainCost === 1 ? `rgb(0,0,0)` : `rgb(64,64,64)`
// }

// function generateGrid(nRows: number, nCols: number): Cell[][] {
//     const grid: Cell[][] = new Array(nRows)
//     for (let rowIndex = 0; rowIndex < nRows; rowIndex++) {
//         const column: Cell[] = new Array(nCols)
//         for (let colIndex = 0; colIndex < nCols; colIndex++) {
//             column[colIndex] = new Cell(rowIndex, colIndex, getRandomTerrainCost())
//         }
//         grid[rowIndex] = column
//     }
//     return grid
// }

// function getStartAndEndCells(grid: Cell[][]): {
//     from: Cell,
//     to: Cell
// } {
//     const validCells = grid.flat().filter(cell => cell.difficulty !== 1)

//     if (validCells.length < 2) {
//         // Not enough valid cells to select two distinct cells
//         throw new Error(`Cannot select start and end cells as grid doesn't have enough free cells`)
//     }

//     let cell1: Cell
//     let cell2: Cell

//     do {
//         cell1 = validCells[Math.floor(Math.random() * validCells.length)]
//         cell2 = validCells[Math.floor(Math.random() * validCells.length)]
//     } while (cell1.x === cell2.x && cell1.y === cell2.y)

//     return {
//         from: cell1,
//         to: cell2
//     }
// }

// function getMoveCost(from: Cell, to: Cell) {
//     return to.difficulty
// }

// function getEstimatedMoveCost(from: Cell, to: Cell) {
//     return someDistance(
//         from.x,
//         from.y,
//         to.x,
//         to.y
//     )
// }

// function getNeighbourNodes(grid: Cell[][], node: Cell, allowDiagonals: boolean = true): Cell[] {
//     const directions = [
//         { dx: 0, dy: -1 },
//         { dx: -1, dy: 0 },
//         { dx: 1, dy: 0 },
//         { dx: 0, dy: 1 },
//     ]

//     if (allowDiagonals) {
//         directions.push({ dx: -1, dy: -1 })
//         directions.push({ dx: 1, dy: 1 })
//         directions.push({ dx: 1, dy: -1 })
//         directions.push({ dx: -1, dy: 1 })
//     }

//     return directions.reduce((neighbors, { dx, dy }) => {
//         const newX = node.x + dx
//         const newY = node.y + dy
//         if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
//             neighbors.push(grid[newX][newY])
//         }
//         return neighbors
//     }, [] as Cell[])
// }

// function isNodeTraversable(grid: Cell[][], from: Cell, node: Cell): boolean {
//     if (node.difficulty === 1) return false

//     const isDiagonalMove = Math.abs(from.x - node.x) === 1 && Math.abs(from.y - node.y) === 1
//     if (isDiagonalMove) {
//         const blockedHorizontally = grid[from.x + (node.x - from.x)]?.[from.y]?.difficulty === 1
//         const blockedVertically = grid[from.x]?.[from.y + (node.y - from.y)]?.difficulty === 1
//         return !(blockedHorizontally && blockedVertically)
//     }

//     return true
// }

// interface PathFindingGridSettings {
//     ROWS?: number
//     COLS?: number
//     NODE_WIDTH?: number
//     NODE_HEIGHT?: number
//     REFRESH_INTERVAL_MS?: number
//     PATH_SPEED_MS?: number
//     FIND_SPEED_MS?: number
//     ALLOW_DIAGONAL?: boolean
// }

// const CellComponent = ({ cell, position, size }: { cell: Cell, position: number[], size: number[] }) => {
//     return (
//         <mesh position={position}>
//             <planeGeometry args={size}></planeGeometry>
//             <meshBasicMaterial color={getBackgroundColor(cell.difficulty)}></meshBasicMaterial>
//         </mesh>
//     )
// }

// const GridComponent = ({ grid, cellSize }: { grid: Cell[][], cellSize: number[] }) => {

//     const totalWidth = grid[0].length * (cellSize[0])
//     const totalHeight = grid.length * (cellSize[1])

//     const xOffset = totalWidth / 2 - (cellSize[0]) / 2;
//     const yOffset = totalHeight / 2 - (cellSize[1]) / 2;

//     return (
//         <>
//             {
//                 grid.map((row, rowIndex) => (
//                     row.map((cell, cellInxex) => {
//                         return (
//                             <CellComponent
//                                 key={`${cell.x}${cell.y}${cell.z}`}
//                                 position={[
//                                     cell.x * (cellSize[0]) - xOffset,
//                                     cell.y * (cellSize[1]) - yOffset,
//                                     cell.z,
//                                 ]}
//                                 size={[
//                                     cellSize[0],
//                                     cellSize[1],
//                                     cellSize[2]
//                                 ]}
//                                 cell={cell}>
//                             </CellComponent>
//                         )
//                     })
//                 ))
//             }
//         </>
//     )
// };

// export const PathFindingGrid = ({
//     ROWS = 30,
//     COLS = 30,
//     NODE_WIDTH = 30,
//     NODE_HEIGHT = 30,
//     REFRESH_INTERVAL_MS = 3000,
//     PATH_SPEED_MS = 200,
//     FIND_SPEED_MS = 10,
//     ALLOW_DIAGONAL = true
// }: PathFindingGridSettings) => {
//     const [nRows] = useState<number>(ROWS)
//     const [nCols] = useState<number>(COLS)
//     const [grid, setGrid] = useState<Cell[][]>(() => generateGrid(nRows, nCols))
//     const [openSet, setOpenSet] = useState<Cell[]>([])
//     const [closedSet, setClosedSet] = useState<Set<Cell>>(new Set())
//     const [path, setPath] = useState<Cell[]>([])
//     const [currentNode, setCurrentNode] = useState<Cell | null>(null)

//     const [pathTraversed, setPathTraversed] = useState<boolean>(false)

//     const { from, to } = useMemo(() => getStartAndEndCells(grid), [grid])

//     const intervalRef = useRef<NodeJS.Timeout | null>(null)
//     const timeoutRef = useRef<NodeJS.Timeout | null>(null)
//     const refreshTimeoutRef = useRef<NodeJS.Timeout | null>(null)

//     useEffect(() => {
//         setGrid(generateGrid(nRows, nCols))
//     }, [nRows, nCols])

//     const pathBounds: { minX: number; maxX: number; minY: number; maxY: number } = useMemo(() => {
//         if (path.length === 0) {
//             return { minX: -1, maxX: -1, minY: -1, maxY: -1 };
//         }

//         let minX = path[0].x;
//         let maxX = path[0].x;
//         let minY = path[0].y;
//         let maxY = path[0].y;

//         for (const cell of path) {
//             if (cell.x < minX) minX = cell.x;
//             if (cell.x > maxX) maxX = cell.x;
//             if (cell.y < minY) minY = cell.y;
//             if (cell.y > maxY) maxY = cell.y;
//         }

//         return { minX, maxX, minY, maxY };
//     }, [path])

//     useEffect(() => {
//         let openSet: Heap<Cell> = new Heap()
//         let closedSet: Set<Cell> = new Set()

//         openSet.push(from)

//         from.gCost = 0
//         from.hCost = getEstimatedMoveCost(from, to)

//         if (intervalRef.current) {
//             clearInterval(intervalRef.current)
//         }

//         intervalRef.current = setInterval(() => {

//             if (openSet.isEmpty()) {
//                 clearInterval(intervalRef.current!)
//                 intervalRef.current = null
//                 return
//             }

//             // Current node is the one with the lowest fCost
//             const currentNode = openSet.pop()!
//             setCurrentNode(currentNode)

//             // If we reached the destination
//             if (currentNode === to) {
//                 clearInterval(intervalRef.current!)
//                 intervalRef.current = null
//                 // Reconstruct path
//                 let path: Cell[] = []
//                 let temp: Cell | null = currentNode
//                 while (temp !== null) {
//                     path.push(temp)
//                     temp = temp.parent
//                 }
//                 setPath([])
//                 animatePath(path.reverse())
//                 return
//             }

//             closedSet.add(currentNode)
//             setClosedSet(new Set(closedSet))

//             const neighbors = getNeighbourNodes(grid, currentNode, ALLOW_DIAGONAL)
//             for (const neighbor of neighbors) {
//                 if (closedSet.has(neighbor) || !isNodeTraversable(grid, currentNode, neighbor)) {
//                     continue
//                 }

//                 const tentativeGCost = currentNode.gCost + getMoveCost(currentNode, neighbor)
//                 if (tentativeGCost < neighbor.gCost) {
//                     neighbor.parent = currentNode
//                     neighbor.gCost = tentativeGCost
//                     neighbor.hCost = getEstimatedMoveCost(neighbor, to)

//                     if (!openSet.contains(neighbor)) {
//                         openSet.push(neighbor)
//                     }
//                 }
//             }

//             setOpenSet([...openSet])
//         }, FIND_SPEED_MS)

//         return () => {
//             if (intervalRef.current) {
//                 clearInterval(intervalRef.current)
//                 intervalRef.current = null
//             }
//             if (timeoutRef.current) {
//                 clearTimeout(timeoutRef.current)
//                 timeoutRef.current = null
//             }
//         }
//     }, [from, to, grid])

//     const getCellId = (cell: Cell) => {
//         return cell.x * grid[0].length + cell.y
//     }

//     const animatePath = (path: Cell[]) => {
//         // Create an array of timeout promises
//         const timeouts = path.map((cell, index) => {
//             return new Promise<void>((resolve) => {
//                 setTimeout(() => {
//                     setPath(prevPath => [...prevPath, cell]);
//                     resolve();
//                 }, index * PATH_SPEED_MS);
//             });
//         });

//         Promise.all(timeouts).then(() => {
//             setPathTraversed(true)
//             refreshTimeoutRef.current = setTimeout(() => {
//                 setPath([])
//                 setGrid(generateGrid(nRows, nCols))
//                 setPathTraversed(false)
//             }, REFRESH_INTERVAL_MS)
//         })
//     };

//     const isWithinSight = (x3: number, y3: number) => {
//         const { minX } = pathBounds
//         const { maxX } = pathBounds
//         const { minY } = pathBounds
//         const { maxY } = pathBounds
//         return x3 >= minX && x3 <= maxX && y3 >= minY && y3 <= maxY;
//     }

//     const totalWidth = grid[0].length * (NODE_WIDTH)
//     const totalHeight = grid.length * (NODE_HEIGHT)

//     const xOffset = totalWidth / 2 - (NODE_WIDTH) / 2;
//     const yOffset = totalHeight / 2 - (NODE_HEIGHT) / 2;

//     return (

//         <Canvas>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[10, 10, 10]} />
//             <GridComponent grid={grid} cellSize={[NODE_WIDTH, NODE_HEIGHT]}></GridComponent>

//             {
//                 grid.map((row, rowIndex) => (
//                     row.map((cell, cellInxex) => {

//                         const isFrom = from.x === cell.x && from.y === cell.y
//                         const isTo = to.x === cell.x && to.y === cell.y

//                         const isInPath = path.some(p => p.x === cell.x && p.y === cell.y)

//                         const isOpen = openSet.some(p => p.x === cell.x && p.y === cell.y)
//                         const isClosed = closedSet.has(cell)
//                         const isCurrent = cell.x === currentNode?.x && currentNode?.y === cell.y

//                         const isDim = !isFrom && !isTo && !isInPath && pathTraversed && !isWithinSight(cell.x, cell.y) && cell.difficulty !== 1

//                         let color = getBackgroundColor(cell.difficulty)

//                         if(isInPath) {
//                             color = 'white'
//                         }

//                         if(isCurrent) {
//                             color = 'pink'
//                         }

//                         if(isFrom) {
//                             color = `rgb(132, 94, 237)`
//                         }

//                         if(isTo) {
//                             color = `rgb(85, 182, 133)`
//                         }

//                         if(isDim) {
//                             color = `rgb(14,14,14)`
//                         }

//                         return (
//                             <mesh position={[
//                                 cell.x * (NODE_WIDTH) - xOffset,
//                                 cell.y * (NODE_HEIGHT) - yOffset,
//                                 cell.z,
//                             ]}>
//                                 <planeGeometry args={[
//                                     NODE_WIDTH,
//                                     NODE_HEIGHT,
//                                     1
//                                 ]}></planeGeometry>
//                                 <meshBasicMaterial color={color}></meshBasicMaterial>
//                             </mesh>
//                         )
//                     })
//                 ))
//             }
//         </Canvas>
//         /* <div
//             className={styles.gridContainer}
//             style={{
//                 gridTemplateColumns: `repeat(${nCols}, ${NODE_WIDTH}px)`,
//                 gridTemplateRows: `repeat(${nRows}, ${NODE_HEIGHT}px)`,
//                 ...(pathTraversed && {
//                     filter: 'brightness(0.7)'
//                 })
//             }}
//         >
//             {grid.map((row, rowIndex) => (
//                 row.map((cell, cellInxex) => {

//                     const isFrom = from.x === cell.x && from.y === cell.y
//                     const isTo = to.x === cell.x && to.y === cell.y

//                     const isInPath = path.some(p => p.x === cell.x && p.y === cell.y)

//                     const isOpen = openSet.some(p => p.x === cell.x && p.y === cell.y)
//                     const isClosed = closedSet.has(cell)
//                     const isCurrent = cell.x === currentNode?.x && currentNode?.y === cell.y

//                     const isDim = !isFrom && !isTo && !isInPath && pathTraversed && !isWithinSight(cell.x, cell.y) && cell.difficulty !== 1

//                     return (
//                         <div
//                             className={styles.cell}
//                             key={getCellId(cell)}
//                             data-id={getCellId(cell)}
//                             data-terrain-cost={cell.difficulty}
//                             data-x={cell.x}
//                             data-y={cell.y}
//                             style={{
//                                 backgroundColor: getBackgroundColor(cell.difficulty),
//                                 color: cell.difficulty > 0.5 ? 'white' : 'black',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 // ...(isOpen && {
//                                 //     backgroundColor: 'red',
//                                 //     color: 'white',
//                                 // }),
//                                 ...(isInPath && {
//                                     backgroundColor: 'rgb(255, 255, 255)',
//                                     color: 'black',
//                                 }),
//                                 ...(isCurrent && {
//                                     backgroundColor: 'pink',
//                                     color: 'pink',
//                                 }),
//                                 ...(isFrom && {
//                                     backgroundColor: 'rgb(132, 94, 237)',
//                                     color: 'white',
//                                 }),
//                                 ...(isTo && {
//                                     backgroundColor: 'rgb(85, 182, 133)',
//                                     color: 'white',
//                                 }),
//                                 ...(isDim && {
//                                     backgroundColor: 'rgb(14,14,14)',
//                                     color: 'white',
//                                 }),
//                             }}
//                         >
//                             {cell.fCost === Infinity ? "" : cell.fCost}
//                         </div>
//                     )
//                 })
//             ))}
//         </div > */
//     )
// }
export {}