'use client'
import { deleteTodo } from '@/app/actions'
import React from 'react'

function DeleteBtn({ id }: { id: string }) {
    return (
        <button key={id} onClick={async () => {
            deleteTodo(id)
        }} className="p-2 cursor-pointer rounded-lg hover:bg-gray-200 text-gray-500 hover:text-red-400 transition-color duration-150">
            <svg width="20" height="21" stroke='currentColor' viewBox="0 0 20 21"  xmlns="http://www.w3.org/2000/svg" >
                <path d="M8 4H12C12 2.89543 11.1046 2 10 2C8.8954 2 8 2.89543 8 4ZM6.5 4C6.5 2.067 8.067 0.5 10 0.5C11.933 0.5 13.5 2.067 13.5 4H19.25C19.6642 4 20 4.33579 20 4.75C20 5.16421 19.6642 5.5 19.25 5.5H17.9309L16.7589 17.6112C16.5729 19.5334 14.9575 21 13.0263 21H6.97369C5.04254 21 3.42715 19.5334 3.24113 17.6112L2.06908 5.5H0.75C0.33579 5.5 0 5.16421 0 4.75C0 4.33579 0.33579 4 0.75 4H6.5ZM8.5 8.75C8.5 8.33579 8.1642 8 7.75 8C7.33579 8 7 8.33579 7 8.75V16.25C7 16.6642 7.33579 17 7.75 17C8.1642 17 8.5 16.6642 8.5 16.25V8.75ZM12.25 8C12.6642 8 13 8.33579 13 8.75V16.25C13 16.6642 12.6642 17 12.25 17C11.8358 17 11.5 16.6642 11.5 16.25V8.75C11.5 8.33579 11.8358 8 12.25 8ZM4.73416 17.4667C4.84577 18.62 5.815 19.5 6.97369 19.5H13.0263C14.185 19.5 15.1542 18.62 15.2658 17.4667L16.4239 5.5H3.57608L4.73416 17.4667Z" fill="#1B1B1B" />
            </svg>

        </button>
    )
}

export default DeleteBtn