import styles from "./foot.module.css";   

export default function Footer({ todoCom, totalTodos }) { 
    
    return (
        <div className={styles.foot}>
            <span className={styles.item}>Task Completed: {todoCom} </span>
            <span className={styles.item}>Total Todo's: {totalTodos}</span>

        </div>
    );
}