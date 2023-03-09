import { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import styles from './Todos.module.css';

// FC - Functional Component - type definition; it makes clear that below code is a function
// and actes as a functional component
const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={styles.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
