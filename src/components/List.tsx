import styles from "./List.module.css";

import { ListProps } from "../common/types";
import { Trash } from "phosphor-react";

export function List({ tasks }: ListProps) {
	const checkedTasks = tasks.filter((task) => task.checked).length;

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
									<input
										type="radio"
										key={task.id}
										className={styles.radioField}
									/>
									<img
										src="/check.svg"
										alt=""
										className={styles.radioChecked}
									/>
								</span>
								<span className={styles.description}>
									<p>{task.description}</p>
								</span>
								<button title="delete task" className={styles.deleteIcon}>
									<img src="/trash.svg" alt="" />
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
