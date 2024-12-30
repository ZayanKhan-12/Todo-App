import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false });

    
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.name.trim()) { 
            setTodos([...todos, todo]); 
            setTodo({ name: "", done: false }); 
        
        }
        
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.align}>
                <input className={styles.todoinput} onChange={(e) => setTodo({ name: e.target.value, done: false })} value={todo.name} type="text" placeholder="Enter the tasks that need to be done!" />
            <button className={styles.todobut }type="submit">Add</button>
            </div>
        </form>
    );
 }