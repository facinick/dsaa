import { PercolatingGrid } from '../PercolatingGrid/PercolatingGrid';
import styles from './App.module.css';

function App() {
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
