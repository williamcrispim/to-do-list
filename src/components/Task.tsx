import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Task.module.css";
import { TaskInterface, TaskProps } from "../types/types";

const taskInitialModel = {
	id: 0,
	description: "",
	checked: false,
	date: "",
};

export function Task({ setTask }: TaskProps) {
	const [newTask, setNewTask] = useState<TaskInterface>(taskInitialModel);

	function handleTaskValue(event?: ChangeEvent<HTMLInputElement>) {
    const dateNow = new Date();
		setNewTask((state) => {
      if (event) {
        return {
          id: taskInitialModel.id,
          description: event.target.value,
          checked: false,
          date: taskInitialModel.date,
        };
      } else {
        state.id = dateNow.getTime();
        state.date = dateNow.toISOString();
        return state;
      }
		});
	}

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		handleTaskValue();
		setTask(newTask);
		setNewTask(taskInitialModel);
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.createTaskContainer}>
			<input
				type="text"
				placeholder="Add a new task"
				className={styles.taskField}
				onChange={handleTaskValue}
				value={newTask.description}
			/>
			<button type="submit" className={styles.createButton} disabled={newTask.description.length === 0}>
				Create
				<img src="/plus.svg" alt="plus icon" />
			</button>
		</form>
	);
}
