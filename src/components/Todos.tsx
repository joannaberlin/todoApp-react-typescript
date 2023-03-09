// FC - Functional Component - type definition; it makes clear that below code is a function
// and actes as a functional component
const Todos: React.FC<{ items: string[] }> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};

export default Todos;
