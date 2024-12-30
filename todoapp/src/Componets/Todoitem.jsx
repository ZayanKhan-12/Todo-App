import styles from "./item.module.css";
export default function Todoitem({ item, todos, setTodos}) {
    function handleDel(item) {
        console.log("delete", item);
        setTodos(todos.filter((todo)=> todo !== item));
    }
    function handleClick(name) {
        const newArray = todos.map((todo) =>
            todo.name === name.name ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newArray);
    }
    const className = item.done ? styles.com : "";
    return (
    <div className={styles.item}>
    
            <div className={styles.text}>
                <span className={className } onClick={()=>handleClick(item)}>{item.name}</span>
                <span >
                <button onClick={()=>handleDel(item)} className={styles.del} >X</button>
                </span>
                </div>
            
            <hr className={styles.line } />
    </div>
);
}