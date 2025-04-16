'use client';
import React, { useState } from 'react';
import { updateTodo } from '@/app/actions';
import Todo from '@/app/lib/definitions';

function ContentEditor({ item }: { item: Todo }) {
    const [content, setContent] = useState(item.content);

    const handleContentChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = e.target.value;
        setContent(newContent); 
        await updateTodo(item._id, { title: item.title, content: newContent }); 
    };

    return (
        <textarea

            key={item._id}
            value={content}
            onChange={handleContentChange}
            className="todo-content text-lg border-0 outline-0 w-full h-[300px] resize-none"
            placeholder={item.content}
        />
    );
}

export default ContentEditor;