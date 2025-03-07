import { useState } from "react";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Task } from "./components/Task";

import { TaskInterface } from "./types/types";

export default function App() {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);

	function setTask(task: TaskInterface) {
		setTasks([...tasks, task]);
	}

	function updateTask(taskUpdated: TaskInterface) {
		setTasks(state => {
      const stateUpdated = state.map((task) => {
      	if (task.id === taskUpdated.id) {
          task = taskUpdated
        };
      	return task;
      });
      return stateUpdated;
    });
	}

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Task setTask={setTask} />
				<List tasks={tasks} updateTask={updateTask} />
			</div>
		</>
	);
}
