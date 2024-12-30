import { useState, useEffect } from "react";
import styles from "./clock.module.css";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div className={styles.clock}>
            {time.toLocaleTimeString()}
        </div>
    );
}