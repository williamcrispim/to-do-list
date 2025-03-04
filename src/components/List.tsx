import styles from "./List.module.css";

import { ListProps } from "../common/types";

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
								<input type="radio" key={task.id} />
								<img src="/check.svg" alt="" className={styles.checked} />
								<span>{task.description}</span>
								<img src="/trash.svg" alt="trash icon" />
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
