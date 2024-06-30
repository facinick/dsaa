import { Percolation, SiteState } from 'algorithms';
import { useEffect, useRef, useState } from "react";
import styles from './Stats.module.css';
import { DataList, Badge, Flex, Code, IconButton, Link, Container, Card } from '@radix-ui/themes';

interface Props {
  percolation: Percolation
  siteState: Array<SiteState>
}

export const Stats = ({ percolation, siteState }: Props): JSX.Element => {

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

  }, [siteState])

  return (
    <Container size="1">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Percolationg</DataList.Label>
          <DataList.Value>
            {percolating &&
              <Badge color="jade" variant="soft" radius="full">
                Yes
              </Badge>
            }
            {!percolating &&
              <Badge color="red" variant="soft" radius="full">
                No
              </Badge>
            }
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Total Sites</DataList.Label>
          <DataList.Value>{nTotalSites.current}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Open Sites</DataList.Label>
          <DataList.Value>{nOpenSites}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Flooded Sites</DataList.Label>
          <DataList.Value>{nFLoodedSites}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Container>
  )
}