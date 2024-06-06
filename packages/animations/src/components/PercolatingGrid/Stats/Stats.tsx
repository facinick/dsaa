import { Percolation, SiteState } from 'algorithms';
import { useEffect, useRef, useState } from "react";
import styles from './Stats.module.css';

interface Props {
  percolation: Percolation
  siteState: Array<SiteState>
}

export const Stats = ({percolation, siteState}: Props): JSX.Element => {

  const [nOpenSites, setNOpenSites] = useState<number>(() => percolation.getNSitesOpen());
  const [nFLoodedSites, setNFLoodedSites] = useState<number>(() => percolation.getNSitesFlooded());
  const [percolating, setPercolating] = useState<boolean>(() => percolation.isPercolating());
  const nTotalSites = useRef<number>(percolation.getNSites())

  useEffect(() => {
    const nextNOpenSites = percolation.getNSitesOpen()
    const nextNFloodedSites = percolation.getNSitesFlooded()
    const nextPercolating = percolation.isPercolating()

    setNOpenSites(nextNOpenSites)
    setNFLoodedSites(nextNFloodedSites)
    setPercolating(nextPercolating)

  }, [siteState, percolation])

  return (
    <div className={styles.stats}>
      <span>Total Sites: {nTotalSites.current}</span>
      <span>Open Sites: {nOpenSites}</span>
      <span>Flooded Sites: {nFLoodedSites}</span>
      <span>Percolating: {percolating ? `Yes` : `No` }</span>
    </div>
  )
}