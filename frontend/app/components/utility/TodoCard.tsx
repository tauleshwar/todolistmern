'use client';

import { useRouter } from 'next/navigation'
import { format } from 'date-fns';

type TodoCardProps = {
  title: string;
  content: string;
  updatedAt: string;
  _id: string;
};


function TodoCard({ item, currentPage, activeCardId }: { item: TodoCardProps, currentPage: number, activeCardId: string | null, }) {

  const router = useRouter()

  const handleCardClick = (page: number, id: string) => {
    if (activeCardId === id) return;
    router.push(`/todo/${page}/${id}`)

  }

  const isActive = (id: string) => {
    return activeCardId === id ? 'active-card' : ''
  }

  const formattedDate = format(new Date(item.updatedAt), 'MMMM dd, yyyy')
  item.updatedAt = formattedDate

  return (


    <li key={item._id} onClick={() => handleCardClick(currentPage, item._id)} className={`p-3 bg-secondary rounded-lg cursor-pointer ${isActive(item._id)}`}>
      <h3 className="font-semibold text-m text-gray-800 mb-1">{item.title}</h3>

      <div className="detail-bottom flex justify-between items-center">
        <p className="text-sm text-gray-600 line-clamp-2 mb-1">{item.content}</p>
        <span className="text-sm text-gray-400 text-nowrap items-end">{item.updatedAt}</span>
      </div>
    </li>

  )
}

export default TodoCard