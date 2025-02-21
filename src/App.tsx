import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </>
  )
}
