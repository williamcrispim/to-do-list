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
				tasks.map((task) => {
					return <p key={task.id}>{JSON.stringify(task)}</p>;
					// return (<ul className={styles.list}>
					//   <li>item 1</li>
					//   <li>item 2</li>
					//   <li>item 3</li>
					//   <li>item 4</li>
					//   <li>item 5</li>
					// </ul>)
				})
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
