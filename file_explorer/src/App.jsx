// internal components
import FileExplorer from './components/FileExplorer';
// constant
import { explorer } from './components/data/explorer.constant.js';
// styles
import styles from './App.module.scss';

export default function App() {
  return (
    <div className="App">
      <div className={styles.fileExplorer}>
        <FileExplorer explorer={explorer} />
      </div>
    </div>
  );
}
