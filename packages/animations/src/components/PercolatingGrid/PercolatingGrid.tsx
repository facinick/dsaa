import { Percolation, SiteState } from 'algorithms';
import { useMemo, useState } from "react";
import { calculateConfidenceInterval, calculateMean, calculateStandardDeviation, getRandomIntBetween } from 'utils';
import { GridNode } from "./Node";
import styles from "./PercolatingGrid.module.css";
import { Stats } from "./Stats/Stats";

const SETTINGS = {
  ROWS: 40,
  COLS: 40,
  NUMBER_OF_TRIALS: 100,
}

export const PercolatingGrid = (): JSX.Element => {

  const nRows: number = SETTINGS.ROWS
  const nCols: number = SETTINGS.COLS
  const nLength = nRows * nCols + 2;
  const percolation = useMemo(() => new Percolation(nRows, nCols), [nRows, nCols])
  const [id, setId] = useState<Array<number>>(() => percolation.getData());
  const [siteState, setSiteState] = useState<Array<SiteState>>(() => percolation.getSiteState());

  const [currentTrial, setCurrentTrial] = useState<number>(0)

  // const [playWaterDropSound] = useSound(waterDropSound, {
  //   sprite: {
  //     drop1: [400, 1000],
  //     drop2: [1500, 2000],
  //     drop3: [2700, 2300],
  //   },
  // });

  // const [hoveredNode, setHoveredNode] = useState<number>(-1);
  // const [hoveredNodeTimer, setHoveredNodeTimer] = useState<NodeJS.Timeout | null>(null);

  const NODE_WIDTH = 20;
  const NODE_HEIGHT = 20;
  const GRID_WIDTH = NODE_WIDTH * nCols;
  const GRID_HEIGHT = NODE_HEIGHT * nRows;

  const onGridNodeClick = (p: number) => {
    if (!percolation.isOpen(p)) {
      percolation.openSite(p)
      // playWaterDropSound({
      //   id: "drop1"
      // })
      setId([...percolation.getData()])
      setSiteState([...percolation.getSiteState()])
    }
  }

  // const handleMouseEnter = (index: number) => {
  //   // Clear any existing timer
  //   if (hoveredNodeTimer) {
  //     clearTimeout(hoveredNodeTimer);
  //   }
  //   // Set a new timer
  //   const timer = setTimeout(() => {
  //     setHoveredNode(index);
  //   }, 50); // Change 200 to the desired delay in milliseconds
  //   setHoveredNodeTimer(timer);
  // };

  // const handleMouseLeave = () => {
  //   // Clear the timer if the mouse leaves before the timer completes
  //   if (hoveredNodeTimer) {
  //     clearTimeout(hoveredNodeTimer);
  //     setHoveredNodeTimer(null);
  //   }
  // };

  const runSimulation = () => {

    const pValues = []

    for(let i=0; i<SETTINGS.NUMBER_OF_TRIALS; i++) {

      let isPercolating = percolation.isPercolating()

      while(!isPercolating) {
        percolation.openSite(getRandomIntBetween(1, nLength))
        isPercolating = percolation.isPercolating()
      }
      pValues.push(Number((percolation.getNSitesOpen() / (nRows * nCols)).toFixed(2)))
      percolation.reset()
    }

    const meanP = calculateMean(pValues);
    const stdP = calculateStandardDeviation(pValues);
    const confidenceInterval = calculateConfidenceInterval(pValues);

    console.log(`Mean percolation threshold: ${meanP.toFixed(2)}`)
    console.log(`Standard deviation: ${stdP.toFixed(2)}`);
    console.log(`95% confidence interval: [${confidenceInterval[0].toFixed(2)}, ${confidenceInterval[1].toFixed(2)}]`);
  }

  return (
    <>
      <div
        className={styles.grid}
        style={{
          width: GRID_WIDTH,
          height: GRID_HEIGHT,
          display: "grid",
          gridTemplateColumns: `repeat(${nCols}, ${NODE_WIDTH}px)`,
          gridTemplateRows: `repeat(${nRows}, ${NODE_HEIGHT}px)`,
        }}
        // onMouseLeave={() => handleMouseLeave()}
      >
        {
          id.map((_, index, id) => {
            if (index !== 0 && index !== nLength - 1) {
              return (
                <GridNode
                    key={index}
                    onClick={() => onGridNodeClick(index)}
                    id={index}
                    parentId={id[index]}
                    siteState={siteState[index]}
                    // onMouseEnter={() =>
                    //   handleMouseEnter(index)}
                  />
              )
            } else return null;
          })
        }
      </div>
      <Stats percolation={percolation} siteState={siteState} />
      <button onClick={runSimulation}>Run Simulation</button>
    </>
  )
}