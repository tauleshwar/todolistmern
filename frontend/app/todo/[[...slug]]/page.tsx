import TodoList from '../../components/TodoList';
import Pagination from '../../components/utility/Pagination';
import Editor from '../../components/utility/Editor';
import Link from 'next/link';

async function countTodos() {
  const res = await fetch(`http://localhost:5000/api/todos/count`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch TODOs count');
  }
  const data = await res.json();
  return data.count;
}

export default async function HomePage({ params }: { params: Promise<{ slug: string }> }) {
  const totalTodos = await countTodos();
  const totalPages = totalTodos ? Math.max(1, Math.ceil(totalTodos / 10)) : 1;

  const slug = await params.then((res) => res.slug);

  let activeCardId = '';
  let currentPage = 1;

  if (slug && slug.length > 0) {
    currentPage = parseInt(slug[0]);
    activeCardId = slug[1];
  }

  return (
    <main className="home mx-2 md:mx-30 my-10 flex flex-col md:flex-row gap-15">
      <div className="w-full md:min-w-5/12 md:w-5/12  ">
        <TodoList currentPage={currentPage} activeCardId={activeCardId} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
      <div className="hidden md:block editor-section md:w-7/12">
        {activeCardId && <Editor activeCardId={activeCardId} />}
      </div>
      {activeCardId && (
        <div className="md:hidden fixed top-10 left-1 right-1 editor-section h-[100vh] bg-white border-2 rounded-xl p-2 w-auto">
          <Link href={`/todo`} className="relative float-right font-bold text-gray-500 hover:text-gray-700">
            Close
          </Link>
          <Editor activeCardId={activeCardId} />
        </div>
      )}
    </main>
  );
}
