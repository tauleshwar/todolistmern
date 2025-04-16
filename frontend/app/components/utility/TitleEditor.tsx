'use client';
import React, { useState } from 'react';
import { updateTodo } from '@/app/actions';
import Todo from '@/app/lib/definitions';

function TitleEditor({ item }: { item: Todo }) {
    const [title, setTitle] = useState(item.title);

    const handleTitleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setTitle(newTitle); 
        await updateTodo(item._id, { title: newTitle, content: item.content }); 
    };

    return (
        <input
            key={item._id}
            value={title}
            onChange={handleTitleChange}
            className="todo-title w-11/12 text-xl md:text-3xl font-semibold text-gray-800"
            placeholder={item.title} 
        />
    );
}

export default TitleEditor;