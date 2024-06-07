import { DoublyLinkedList } from 'data_structures';
import { useEffect } from 'react';
import { PercolatingGrid } from '../PercolatingGrid';
import styles from './App.module.css';

function App() {

  useEffect(() => {
    const dll = new DoublyLinkedList<number>((a,b) => a<b? -1: a>b ? 1: 0)
    console.log(`-----1-----`)
    dll.insertAtHead(1)
    dll.insertAtHead(2)
    dll.insertAtHead(3)
    dll.insertAtHead(4)
    dll.insertAtHead(5)
    console.log(`size: ${dll.getSize()}`)
    console.log(`removed: ${dll.deleteAtHead()}`)
    console.log(`size: ${dll.getSize()}`)
    console.log(`removed: ${dll.deleteAtTail()}`)
    console.log(`size: ${dll.getSize()}`)

    for(let element of dll) {
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
