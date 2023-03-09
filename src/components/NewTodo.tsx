import { useRef } from 'react';
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// throw error
			return;
		}

		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInputRef}></input>
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
