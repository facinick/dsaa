import { Heading } from '@radix-ui/themes';
import { PercolatingGrid } from '../PercolatingGrid/PercolatingGrid';
import styles from './App.module.css';

const SETTINGS = {
  ROWS: 20,
  COLS: 20,
  NUMBER_OF_TRIALS: 100,
  FLOOD_STAGGER_DELAY: 70,
  NODE_WIDTH: 30,
  NODE_HEIGHT: 30
}

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <PercolatingGrid />
      </main>
    </div>
  );
}

export default App;
