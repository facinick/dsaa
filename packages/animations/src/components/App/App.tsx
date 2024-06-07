import { DynamicArrayStack } from 'data_structures';
import { useEffect } from 'react';
import { PercolatingGrid } from '../PercolatingGrid/PercolatingGrid';
import styles from './App.module.css';

function App() {

  useEffect(() => {
    const ss = new DynamicArrayStack<number>((a,b) => a<b? -1: a>b ? 1: 0)
    console.log(`-----1-----`)
    ss.push(1)
    ss.push(2)
    ss.push(3)
    ss.push(4)
    ss.push(5)

    for(let element of ss) {
      console.log(element)
    }
    console.log(`----------`)
  },[])

  return (
    <div>
      <header className={styles.header}>
        Percolating Grid
      </header>
      <main className={styles.main}>
        <PercolatingGrid />
      </main>
    </div>
  );
}

export default App;
