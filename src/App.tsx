import { useState } from "react";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Task } from "./components/Task";

import { TaskInterface } from "./types/types";

export default function App() {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);

	function setTask(task: TaskInterface) {
		setTasks([task, ...tasks]);
	}

	function updateTask(taskUpdated: TaskInterface) {
		setTasks(state => {
      const stateUpdated = state.map((task) => {
      	if (task.id === taskUpdated.id) {
          task = taskUpdated
        };
      	return task;
      });
			stateUpdated.sort((a,b) => Number(a.checked) - Number(b.checked));
      return stateUpdated;
    });
	}

	function deleteTask(taskToDelete: TaskInterface) {
		setTasks(state => {
      return state.filter((task) => {
      	if (task.id === taskToDelete.id) return;
      	return task;
      });
    });
	}

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Task setTask={setTask} />
				<List tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
			</div>
		</>
	);
}
