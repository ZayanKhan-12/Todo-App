import Todoitem from "./Todoitem";
import styles from "./list.module.css";
export default function List({ todos, setTodos }) {
    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number (b.done));
    
    return (
        <div className={styles.text}>
        {sortedTodos.map((item) => (
            <Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos} />
        ))}
    </div>
    );
    
}