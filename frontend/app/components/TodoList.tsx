import Todo from "../lib/definitions";
import TodoCard from "./utility/TodoCard";
import TodoListTop from "./utility/TodoListTop";

async function fetchTodos(page: number) {
    const res = await fetch(`${process.env.API_URI}?page=${page.toString()}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch TODOs');
    }
    const data = await res.json();
    const todos: Todo[] = data.todos;
    return todos;
}





export default async function TodoList({ currentPage, activeCardId }: { currentPage: number, activeCardId: string }) {
    const todolist = await fetchTodos(currentPage)


    return (
        <aside className=" border-gray-200 flex flex-col">

            <TodoListTop />
            <div className="flex-grow overflow-y-auto ">
                <ul className="flex flex-col gap-2">
                    {todolist.map(item => {
                        return (
                            <TodoCard key={item._id} item={item} currentPage={currentPage} activeCardId={activeCardId} />

                        )
                    })}
                </ul>
            </div>
        </aside>
    );
}