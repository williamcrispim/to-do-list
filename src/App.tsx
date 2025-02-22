import { useState } from "react";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Task } from "./components/Task";

import { TaskInterface } from "./common/types";

export default function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function setTask(task: TaskInterface) {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task setTask={setTask} />
        <List tasks={tasks} />
      </div>
    </>
  );
}
