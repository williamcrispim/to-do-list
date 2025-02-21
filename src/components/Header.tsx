import styles from "./Header.module.css";

export function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logoContainer}>
					<img src="/rocket.svg" alt="rocket logo" />
					<p className={styles.title}>
						to<span>do</span>
					</p>
				</div>
			</header>
		</>
	);
}
