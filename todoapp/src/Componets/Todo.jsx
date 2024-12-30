import { useState } from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";
import Clock from "./Clock";

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const todoCom = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length;
    const [time, setTime] = useState(new Date());

    

    return (
        <div>
            <Clock time={time} setTime={setTime} />
            <Form todos={todos} setTodos={setTodos } />
            <List todos={todos} setTodos={setTodos} />
            <Footer todoCom={todoCom} totalTodos={totalTodos} />
        </div>
    );
}   