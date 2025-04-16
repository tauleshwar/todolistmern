'use server'
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const API_URI = process.env.API_URI || 'http://localhost:5000/api/todos/'

export async function addTodo() {
    let id = ''
    try {

        const res = await fetch(API_URI, {
            method: 'POST',
        });
        const data = await res.json();
        id = data.todo._id;

    } catch (err) {
        throw new Error('Failed to add TODO' + err)
    }
    revalidatePath(`/todo/1/${id}`)
    redirect(`/todo/1/${id}`)
}


export async function deleteTodo(id: string) {
    try {
        await fetch(`API_URI${id}`,
            {
                method: 'DELETE',

            }
        )
    } catch (err) {
        throw new Error('Failed to delete TODO' + err)
    }
    redirect(`/todo/`)
}

export async function updateTodo(id: string, { title, content }: { title: string, content: string }) {
    try {
        await fetch(`${API_URI}/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title, content: content }),

            }
        )
    } catch (err) {
        throw new Error('Failed to update TODO' + err)
    }
    revalidatePath(`/todo/1/${id}`)
    redirect(`/todo/1/${id}`)
}
export async function fetchTodoById(id: string) {

    try {
        const res = await fetch(`${API_URI}/${id}`, { cache: 'no-store' });
        const data = await res.json();
        return data.todo;

    } catch (err: unknown) {
        throw new Error('Failed to fetch TODO' + err);
    }
}