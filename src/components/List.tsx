import styles from "./List.module.css";

import { ListProps, TaskInterface } from "../types/types";

export function List({ tasks, updateTask, deleteTask }: ListProps) {
	const checkedTasks = tasks.filter((task) => task.checked).length;

	function handleTaskCLick(task: TaskInterface) {
		const invertTaskCheckedValue = { ...task };
		invertTaskCheckedValue.checked = !task.checked;
		updateTask(invertTaskCheckedValue);
	}
	
	function handleTaskDelete(task: TaskInterface) {
		deleteTask(task);
	}

	return (
		<article className={styles.content}>
			<header className={`${styles.info} bold`}>
				<p className="primaryText">
					Tasks <span>{tasks.length}</span>
				</p>
				<p className="secondaryText">
					Done
					<span>
						{checkedTasks} of {tasks.length}
					</span>
				</p>
			</header>
			{tasks.length ? (
				<ul className={styles.list}>
					{tasks.map((task) => {
						return (
							<li key={task.id} className={styles.listItem}>
								<span className={styles.radioFieldContainer}>
									{task.checked ? (
										<img
											src="/check.svg"
											alt=""
											className={styles.radioChecked}
											onClick={() => handleTaskCLick(task)}
										/>
									) : (
										<input
											type="radio"
											key={task.id}
											checked={task.checked}
											onChange={() => handleTaskCLick(task)}
											className={styles.radioField}
										/>
									)}
								</span>
								<span className={styles.description}>
									<p>{task.description}</p>
								</span>
								<button onClick={() => handleTaskDelete(task)} title="delete task" className={styles.deleteButton}>
									<img src="/trash.svg" alt="" className={styles.deleteIcon} />
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<div className={styles.emptyList}>
					<img src="/Clipboard.svg" alt="clipboard icon" />
					<p className="bold">You don't have tasks registered</p>
					<p>Create tasks and organize your to-do items</p>
				</div>
			)}
		</article>
	);
}
