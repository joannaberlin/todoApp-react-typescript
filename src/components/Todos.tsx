import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

// FC - Functional Component - type definition; it makes clear that below code is a function
// and actes as a functional component
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
	props
) => {
	return (
		<ul className={styles.todos}>
			{props.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
