import styles from "./App.module.css";

import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}></div>
    </>
  )
}
