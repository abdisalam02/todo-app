import Todo from "./Todo"

export default function Todos({todoStart, removeToDos}){
    console.log(todoStart)
    return(
        <main className="main-content">
        {todoStart.map((todo) => (
            <Todo key={todo.id} title={todo.title} content={todo.content} removeToDos={removeToDos} id={todo.id} />
        ))}
        </main>
    )
}