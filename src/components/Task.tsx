import { FormEvent } from "react";
import styles from "./Task.module.css";

export function Task() {
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleCreateNewComment}
      className={styles.createTaskContainer}
    >
      <input
        type="text"
        placeholder="Add a new task"
        className={styles.taskField}
      />
      <button type="submit" className={styles.createButton}>
        Create
        <img src="/plus.svg" alt="plus icon" />
      </button>
    </form>
  );
}
