"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
    return <li className="flex gap-2 items-center">
        <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        <button type="button" className="border border-slate-300 text-slate-300 px-2 py-1 m-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" onClick={e => deleteTodo(id)}>Delete</button>
    </li>
}