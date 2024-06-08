import { RandomisedQueue2 } from 'data_structures';
import { useEffect } from 'react';
import { PercolatingGrid } from '../PercolatingGrid';
import styles from './App.module.css';

function App() {

  useEffect(() => {
    const rq = new RandomisedQueue2<number>()
    console.log(`-----1-----`)
    rq.enqueue(1)
    rq.enqueue(2)
    rq.enqueue(3)
    rq.enqueue(4)
    rq.enqueue(5)

    // console.log(rq.dequeue())
    // console.log(rq.dequeue())
    // console.log(rq.dequeue())
    // console.log(rq.dequeue())
    // console.log(rq.dequeue())
    // console.log(rq.dequeue())

    for(let element of rq) {
      console.log(element)
    }
    for(let element of rq) {
      console.log(element)
    }
    for(let element of rq) {
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
